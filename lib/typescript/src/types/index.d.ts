export interface VikkiSDKConfig {
    apiKey: string;
    environment: 'development' | 'production';
    userId?: string;
    theme?: {
        primaryColor?: string;
        secondaryColor?: string;
    };
}
export interface SimStatus {
    hasSim: boolean;
    simNumber?: string;
    status?: 'active' | 'inactive' | 'suspended';
}
export interface DataPackage {
    id: string;
    name: string;
    dataAmount: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    validity: string;
    description: string;
    isHot?: boolean;
}
export interface ActionButton {
    id: string;
    title: string;
    icon: string;
    color: string;
    onPress: () => void;
}
//# sourceMappingURL=index.d.ts.map