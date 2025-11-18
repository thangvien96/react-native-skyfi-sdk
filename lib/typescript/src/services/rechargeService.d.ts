interface RechargeRequest {
    phoneNumber: string;
    amount: number;
    paymentMethod: 'card' | 'momo' | 'zalopay' | 'bank';
}
interface RechargeResponse {
    success: boolean;
    message: string;
    data: {
        transactionId: string;
        amount: number;
        balance: number;
        timestamp: string;
    };
}
interface TransactionHistory {
    id: string;
    type: 'recharge' | 'package' | 'transfer';
    amount: number;
    balance: number;
    description: string;
    timestamp: string;
    status: 'success' | 'pending' | 'failed';
}
declare class RechargeService {
    recharge(data: RechargeRequest): Promise<RechargeResponse>;
    getBalance(phoneNumber: string): Promise<number>;
    getTransactionHistory(phoneNumber: string, limit?: number): Promise<TransactionHistory[]>;
    createPaymentUrl(data: {
        amount: number;
        phoneNumber: string;
        paymentMethod: string;
    }): Promise<string>;
}
declare const _default: RechargeService;
export default _default;
//# sourceMappingURL=rechargeService.d.ts.map