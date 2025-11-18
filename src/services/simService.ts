import api from './api';
import type { SimStatus } from '../types';

interface CheckSimStatusResponse {
  success: boolean;
  data: SimStatus;
}

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

class SimService {
  async checkSimStatus(phoneNumber?: string): Promise<SimStatus> {
    try {
      const response = await api.get<CheckSimStatusResponse>(
        `/sim/status${phoneNumber ? `?phone=${phoneNumber}` : ''}`
      );
      return response.data;
    } catch (error) {
      console.error('Check SIM status failed:', error);
      // Return default status if API fails
      return {
        hasSim: false,
        status: 'inactive',
      };
    }
  }

  async activateSim(data: ActivateSimRequest): Promise<ActivateSimResponse> {
    try {
      const response = await api.post<ActivateSimResponse>('/sim/activate', data);
      return response;
    } catch (error) {
      console.error('Activate SIM failed:', error);
      throw error;
    }
  }

  async buySim(data: {
    packageType: string;
    deliveryAddress: string;
    phoneNumber: string;
  }): Promise<any> {
    try {
      const response = await api.post('/sim/buy', data);
      return response;
    } catch (error) {
      console.error('Buy SIM failed:', error);
      throw error;
    }
  }

  async getSimInfo(simNumber: string): Promise<any> {
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