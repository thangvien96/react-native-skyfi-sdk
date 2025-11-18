import type { DataPackage } from '../types';
interface BuyPackageRequest {
    packageId: string;
    phoneNumber: string;
    paymentMethod: 'balance' | 'card' | 'momo';
}
interface BuyPackageResponse {
    success: boolean;
    message: string;
    data: {
        transactionId: string;
        packageId: string;
        activatedAt: string;
    };
}
declare class PackageService {
    getPackages(category?: string): Promise<DataPackage[]>;
    getPackageDetail(packageId: string): Promise<DataPackage>;
    buyPackage(data: BuyPackageRequest): Promise<BuyPackageResponse>;
    getActivePackages(phoneNumber: string): Promise<DataPackage[]>;
    private getMockPackages;
}
declare const _default: PackageService;
export default _default;
//# sourceMappingURL=packageService.d.ts.map