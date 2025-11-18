/**
 * Format currency in Vietnamese Dong
 */
export declare const formatCurrency: (amount: number) => string;
/**
 * Format number with thousand separators
 */
export declare const formatNumber: (num: number) => string;
/**
 * Format phone number
 * Example: 0987654321 -> 098 765 4321
 */
export declare const formatPhoneNumber: (phone: string) => string;
/**
 * Format date
 */
export declare const formatDate: (date: Date | string, format?: string) => string;
/**
 * Format data amount
 * Example: 20480 -> 20GB
 */
export declare const formatDataAmount: (mb: number) => string;
/**
 * Shorten large numbers
 * Example: 1500000 -> 1.5M
 */
export declare const formatShortNumber: (num: number) => string;
/**
 * Format duration
 * Example: 90 -> "1 giờ 30 phút"
 */
export declare const formatDuration: (minutes: number) => string;
/**
 * Get relative time
 * Example: "2 giờ trước", "1 ngày trước"
 */
export declare const getRelativeTime: (date: Date | string) => string;
//# sourceMappingURL=formatters.d.ts.map