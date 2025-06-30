// WhatsApp integration utilities

export const formatWhatsAppNumber = (phoneNumber: string): string => {
  // Remove all non-digit characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Add country code if not present
  if (!cleaned.startsWith('254') && cleaned.length === 9) {
    return `254${cleaned}`;
  }
  
  return cleaned;
};

export const generateWhatsAppLink = (phoneNumber: string, message?: string): string => {
  const formattedNumber = formatWhatsAppNumber(phoneNumber);
  const encodedMessage = message ? encodeURIComponent(message) : '';
  
  return `https://wa.me/${formattedNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
};

export const openWhatsApp = (phoneNumber: string, message?: string): void => {
  const link = generateWhatsAppLink(phoneNumber, message);
  window.open(link, '_blank');
};