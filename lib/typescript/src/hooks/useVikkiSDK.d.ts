export declare const useVikkiSDK: () => {
    buyPackage: (packageId: string) => Promise<{
        success: boolean;
    }>;
    recharge: (phoneNumber: string, amount: number) => Promise<{
        success: boolean;
    }>;
    getTransactionHistory: () => Promise<never[]>;
    config: import("..").VikkiSDKConfig;
    isVisible: boolean;
    simStatus: import("..").SimStatus | null;
    dataPackages: import("..").DataPackage[];
    openSDK: () => void;
    closeSDK: () => void;
    checkSimStatus: () => Promise<void>;
    fetchDataPackages: () => Promise<void>;
};
//# sourceMappingURL=useVikkiSDK.d.ts.map