// ========== POLYFILLS ==========
// Add String.prototype.toWellFormed if missing (Node < 20)
if (!String.prototype.toWellFormed) {
  String.prototype.toWellFormed = function() {
    return this;
  };
}

// Polyfill for global Web APIs
globalThis.Blob = require('buffer').Blob;

if (typeof global.ReadableStream === "undefined") {
  global.ReadableStream = require("web-streams-polyfill").ReadableStream;
}

if (typeof global.DOMException === "undefined") {
  global.DOMException = class extends Error {
    constructor(message, name = "DOMException") {
      super(message);
      this.name = name;
    }
  };
}

const { fetch, Headers, Request, Response } = require('undici');
globalThis.fetch = fetch;
globalThis.Headers = Headers;
globalThis.Request = Request;
globalThis.Response = Response;

// ========== ENV & IMPORTS ==========
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { MessagingResponse } = require("twilio").twiml;
const { ChatMistralAI } = require("@langchain/mistralai");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { RunnableSequence } = require("@langchain/core/runnables");

// ========== APP SETUP ==========
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// ========== MISTRAL SETUP ==========
let mistral;
try {
  mistral = new ChatMistralAI({
    apiKey: process.env.MISTRAL_API_KEY,
    modelName: "mistral-medium",
  });
} catch (err) {
  console.error("❌ Failed to initialize Mistral client:", err);
  process.exit(1);
}

// ========== LANGCHAIN SETUP ==========
const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a friendly and helpful SMS assistant."],
  ["human", "{input}"],
]);

const chain = RunnableSequence.from([prompt, mistral]);

// ========== TWILIO SMS WEBHOOK ==========
app.post("/sms", async (req, res) => {
  const incomingMessage = req.body.Body;
  const twiml = new MessagingResponse();

  try {
    console.log("📩 Incoming message:", incomingMessage);
    const response = await chain.invoke({ input: incomingMessage });
    console.log("🤖 Response:", response.content);
    twiml.message(response.content || "I'm not sure how to respond.");
  } catch (error) {
    console.error("❌ Processing error:", error);
    twiml.message("Oops! I'm having trouble responding right now. Please try again later.");
  }

  res.type("text/xml");
  res.send(twiml.toString());
});

// ========== HEALTH CHECK ==========
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

// ========== SERVER START ==========
(async () => {
  try {
    // Test Mistral connection
    const testResponse = await mistral.invoke("Hello");
    console.log("✅ Mistral connection test successful:", testResponse.content);
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📞 SMS endpoint: http://localhost:${PORT}/sms`);
    });
  } catch (err) {
    console.error("❌ Mistral connection test failed:", err);
    process.exit(1);
  }
})();
