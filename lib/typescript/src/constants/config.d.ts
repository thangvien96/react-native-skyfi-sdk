export declare const Config: {
    API: {
        TIMEOUT: number;
        RETRY_ATTEMPTS: number;
        RETRY_DELAY: number;
    };
    RECHARGE: {
        MIN_AMOUNT: number;
        MAX_AMOUNT: number;
        QUICK_AMOUNTS: number[];
    };
    PHONE: {
        LENGTH: number;
        PREFIXES: string[];
    };
    PAGINATION: {
        DEFAULT_PAGE_SIZE: number;
        MAX_PAGE_SIZE: number;
    };
    CACHE: {
        PACKAGES_TTL: number;
        SIM_STATUS_TTL: number;
        BALANCE_TTL: number;
    };
    ANIMATION: {
        DURATION: number;
        EASING: string;
    };
    SUPPORT: {
        HOTLINE: string;
        EMAIL: string;
        WEBSITE: string;
    };
};
export default Config;
//# sourceMappingURL=config.d.ts.map