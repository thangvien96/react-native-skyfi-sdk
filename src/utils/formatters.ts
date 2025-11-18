/**
 * Format currency in Vietnamese Dong
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

/**
 * Format number with thousand separators
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString('vi-VN');
};

/**
 * Format phone number
 * Example: 0987654321 -> 098 765 4321
 */
export const formatPhoneNumber = (phone: string): string => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`;
  }
  return phone;
};

/**
 * Format date
 */
export const formatDate = (date: Date | string, format: string = 'DD/MM/YYYY'): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');

  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', String(year))
    .replace('HH', hours)
    .replace('mm', minutes);
};

/**
 * Format data amount
 * Example: 20480 -> 20GB
 */
export const formatDataAmount = (mb: number): string => {
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(0)}GB`;
  }
  return `${mb}MB`;
};

/**
 * Shorten large numbers
 * Example: 1500000 -> 1.5M
 */
export const formatShortNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return String(num);
};

/**
 * Format duration
 * Example: 90 -> "1 giờ 30 phút"
 */
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} phút`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) {
    return `${hours} giờ`;
  }
  return `${hours} giờ ${mins} phút`;
};

/**
 * Get relative time
 * Example: "2 giờ trước", "1 ngày trước"
 */
export const getRelativeTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Vừa xong';
  if (diffMins < 60) return `${diffMins} phút trước`;
  if (diffHours < 24) return `${diffHours} giờ trước`;
  if (diffDays < 7) return `${diffDays} ngày trước`;
  return formatDate(d, 'DD/MM/YYYY');
};