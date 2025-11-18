import type { ReactNode } from 'react';
import type { VikkiSDKConfig, SimStatus, DataPackage } from '../types';
interface VikkiSDKContextType {
    config: VikkiSDKConfig;
    isVisible: boolean;
    simStatus: SimStatus | null;
    dataPackages: DataPackage[];
    openSDK: () => void;
    closeSDK: () => void;
    checkSimStatus: () => Promise<void>;
    fetchDataPackages: () => Promise<void>;
}
interface VikkiSDKProviderProps {
    config: VikkiSDKConfig;
    children: ReactNode;
}
export declare function VikkiSDKProvider({ config, children }: VikkiSDKProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useVikkiSDKContext(): VikkiSDKContextType;
export {};
//# sourceMappingURL=VikkiSDKContext.d.ts.map