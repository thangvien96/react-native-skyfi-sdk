"use strict";

import api from "./api.js";
class SimService {
  async checkSimStatus(phoneNumber) {
    try {
      const response = await api.get(`/sim/status${phoneNumber ? `?phone=${phoneNumber}` : ''}`);
      return response.data;
    } catch (error) {
      console.error('Check SIM status failed:', error);
      // Return default status if API fails
      return {
        hasSim: false,
        status: 'inactive'
      };
    }
  }
  async activateSim(data) {
    try {
      const response = await api.post('/sim/activate', data);
      return response;
    } catch (error) {
      console.error('Activate SIM failed:', error);
      throw error;
    }
  }
  async buySim(data) {
    try {
      const response = await api.post('/sim/buy', data);
      return response;
    } catch (error) {
      console.error('Buy SIM failed:', error);
      throw error;
    }
  }
  async getSimInfo(simNumber) {
    try {
      const response = await api.get(`/sim/info/${simNumber}`);
      return response;
    } catch (error) {
      console.error('Get SIM info failed:', error);
      throw error;
    }
  }
}
export default new SimService();
//# sourceMappingURL=simService.js.map