import type { SimStatus } from '../types';
interface ActivateSimRequest {
    simNumber: string;
    identityCard: string;
    fullName: string;
}
interface ActivateSimResponse {
    success: boolean;
    message: string;
    data: {
        simNumber: string;
        activatedAt: string;
    };
}
declare class SimService {
    checkSimStatus(phoneNumber?: string): Promise<SimStatus>;
    activateSim(data: ActivateSimRequest): Promise<ActivateSimResponse>;
    buySim(data: {
        packageType: string;
        deliveryAddress: string;
        phoneNumber: string;
    }): Promise<any>;
    getSimInfo(simNumber: string): Promise<any>;
}
declare const _default: SimService;
export default _default;
//# sourceMappingURL=simService.d.ts.map