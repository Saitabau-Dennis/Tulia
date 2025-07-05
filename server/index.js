globalThis.Blob = require('buffer').Blob

if (typeof global.ReadableStream === "undefined") {
    global.ReadableStream = require("web-streams-polyfill").ReadableStream;
  }
  
  require("dotenv").config();
  const express = require("express");
  const bodyParser = require("body-parser");
  const { MessagingResponse } = require("twilio").twiml;
  const { ChatMistralAI } = require("@langchain/mistralai");
  const { ChatPromptTemplate } = require("@langchain/core/prompts");
  const { RunnableSequence } = require("@langchain/core/runnables");
  
  // Start Express
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  
  // Mistral setup
  const mistral = new ChatMistralAI({
    apiKey: process.env.MISTRAL_API_KEY,
    modelName: "mistral-medium",
  });
  
  // Define prompt
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a friendly and helpful SMS assistant."],
    ["human", "{input}"],
  ]);
  
  // LangChain pipeline
  const chain = RunnableSequence.from([prompt, mistral]);
  
  // Twilio webhook
  app.post("/sms", async (req, res) => {
    const incomingMessage = req.body.Body;
    const twiml = new MessagingResponse();
  
    try {
      const response = await chain.invoke({ input: incomingMessage });
      twiml.message(response.content || "I'm not sure how to respond.");
    } catch (error) {
      console.error("Error from Mistral:", error);
      twiml.message("Oops! Something went wrong while processing your message.");
    }
  
    res.type("text/xml");
    res.send(twiml.toString());
  });
  
  // Start server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
  });
  