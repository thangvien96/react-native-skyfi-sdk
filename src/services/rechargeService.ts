import api from './api';

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

class RechargeService {
  async recharge(data: RechargeRequest): Promise<RechargeResponse> {
    try {
      const response = await api.post<RechargeResponse>('/recharge', data);
      return response;
    } catch (error) {
      console.error('Recharge failed:', error);
      throw error;
    }
  }

  async getBalance(phoneNumber: string): Promise<number> {
    try {
      const response = await api.get<{ success: boolean; data: { balance: number } }>(
        `/balance/${phoneNumber}`
      );
      return response.data.balance;
    } catch (error) {
      console.error('Get balance failed:', error);
      throw error;
    }
  }

  async getTransactionHistory(
    phoneNumber: string,
    limit: number = 20
  ): Promise<TransactionHistory[]> {
    try {
      const response = await api.get<{ success: boolean; data: TransactionHistory[] }>(
        `/transactions?phone=${phoneNumber}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      console.error('Get transaction history failed:', error);
      return [];
    }
  }

  async createPaymentUrl(data: {
    amount: number;
    phoneNumber: string;
    paymentMethod: string;
  }): Promise<string> {
    try {
      const response = await api.post<{ success: boolean; data: { paymentUrl: string } }>(
        '/payment/create',
        data
      );
      return response.data.paymentUrl;
    } catch (error) {
      console.error('Create payment URL failed:', error);
      throw error;
    }
  }
}

export default new RechargeService();