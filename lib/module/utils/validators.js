"use strict";

/**
 * Validate Vietnamese phone number
 */
export const isValidPhoneNumber = phone => {
  const phoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate email
 */
export const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate Vietnamese ID card
 */
export const isValidIDCard = idCard => {
  // CMND: 9 or 12 digits
  // CCCD: 12 digits
  const idRegex = /^[0-9]{9}$|^[0-9]{12}$/;
  return idRegex.test(idCard.replace(/\s/g, ''));
};

/**
 * Validate recharge amount
 */
export const isValidRechargeAmount = amount => {
  const minAmount = 10000; // 10,000 VND
  const maxAmount = 5000000; // 5,000,000 VND
  return amount >= minAmount && amount <= maxAmount && amount % 1000 === 0;
};

/**
 * Validate OTP code
 */
export const isValidOTP = otp => {
  const otpRegex = /^[0-9]{6}$/;
  return otpRegex.test(otp);
};

/**
 * Sanitize phone number (remove spaces, dashes, etc.)
 */
export const sanitizePhoneNumber = phone => {
  return phone.replace(/[\s\-\(\)]/g, '');
};

/**
 * Check if string is empty or whitespace
 */
export const isEmpty = str => {
  return !str || str.trim().length === 0;
};

/**
 * Validate card number (basic Luhn algorithm)
 */
export const isValidCardNumber = cardNumber => {
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d{13,19}$/.test(cleaned)) return false;
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    // @ts-ignore
    let digit = parseInt(cleaned[i]);
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
};
//# sourceMappingURL=validators.js.map