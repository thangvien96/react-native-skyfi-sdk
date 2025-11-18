"use strict";

import api from "./api.js";
class RechargeService {
  async recharge(data) {
    try {
      const response = await api.post('/recharge', data);
      return response;
    } catch (error) {
      console.error('Recharge failed:', error);
      throw error;
    }
  }
  async getBalance(phoneNumber) {
    try {
      const response = await api.get(`/balance/${phoneNumber}`);
      return response.data.balance;
    } catch (error) {
      console.error('Get balance failed:', error);
      throw error;
    }
  }
  async getTransactionHistory(phoneNumber, limit = 20) {
    try {
      const response = await api.get(`/transactions?phone=${phoneNumber}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Get transaction history failed:', error);
      return [];
    }
  }
  async createPaymentUrl(data) {
    try {
      const response = await api.post('/payment/create', data);
      return response.data.paymentUrl;
    } catch (error) {
      console.error('Create payment URL failed:', error);
      throw error;
    }
  }
}
export default new RechargeService();
//# sourceMappingURL=rechargeService.js.map