/**
 * Validate Vietnamese phone number
 */
export declare const isValidPhoneNumber: (phone: string) => boolean;
/**
 * Validate email
 */
export declare const isValidEmail: (email: string) => boolean;
/**
 * Validate Vietnamese ID card
 */
export declare const isValidIDCard: (idCard: string) => boolean;
/**
 * Validate recharge amount
 */
export declare const isValidRechargeAmount: (amount: number) => boolean;
/**
 * Validate OTP code
 */
export declare const isValidOTP: (otp: string) => boolean;
/**
 * Sanitize phone number (remove spaces, dashes, etc.)
 */
export declare const sanitizePhoneNumber: (phone: string) => string;
/**
 * Check if string is empty or whitespace
 */
export declare const isEmpty: (str: string | null | undefined) => boolean;
/**
 * Validate card number (basic Luhn algorithm)
 */
export declare const isValidCardNumber: (cardNumber: string) => boolean;
//# sourceMappingURL=validators.d.ts.map