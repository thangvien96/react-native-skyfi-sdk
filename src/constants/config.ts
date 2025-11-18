export const Config = {
  // API Configuration
  API: {
    TIMEOUT: 30000, // 30 seconds
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000, // 1 second
  },

  // Recharge limits
  RECHARGE: {
    MIN_AMOUNT: 10000, // 10,000 VND
    MAX_AMOUNT: 5000000, // 5,000,000 VND
    QUICK_AMOUNTS: [20000, 50000, 100000, 200000, 500000, 1000000],
  },

  // Phone validation
  PHONE: {
    LENGTH: 10,
    PREFIXES: ['03', '05', '07', '08', '09'],
  },

  // Pagination
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
  },

  // Cache
  CACHE: {
    PACKAGES_TTL: 300000, // 5 minutes
    SIM_STATUS_TTL: 60000, // 1 minute
    BALANCE_TTL: 30000, // 30 seconds
  },

  // Animation
  ANIMATION: {
    DURATION: 300,
    EASING: 'ease-in-out',
  },

  // Support
  SUPPORT: {
    HOTLINE: '1900-xxxx',
    EMAIL: 'support@vikki.vn',
    WEBSITE: 'https://vikki.vn',
  },
};

export default Config;