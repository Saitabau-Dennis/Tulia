// Form validation utilities

export const validateAge = (age: string): string | null => {
  if (!age) return 'Age is required';
  const ageNum = parseInt(age);
  if (isNaN(ageNum)) return 'Age must be a number';
  if (ageNum < 13 || ageNum > 30) return 'Age must be between 13 and 30';
  return null;
};

export const validatePhoneNumber = (phone: string): string | null => {
  if (!phone) return 'Phone number is required';
  const phoneRegex = /^\+?[\d\s-()]+$/;
  if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
};

export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value || value.trim() === '') return `${fieldName} is required`;
  return null;
};