import api from './api';
import type { DataPackage } from '../types';

interface GetPackagesResponse {
  success: boolean;
  data: DataPackage[];
}

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

class PackageService {
  async getPackages(category?: string): Promise<DataPackage[]> {
    try {
      const endpoint = category ? `/packages?category=${category}` : '/packages';
      const response = await api.get<GetPackagesResponse>(endpoint);
      return response.data;
    } catch (error) {
      console.error('Get packages failed:', error);
      // Return mock data if API fails
      return this.getMockPackages();
    }
  }

  async getPackageDetail(packageId: string): Promise<DataPackage> {
    try {
      const response = await api.get<{ success: boolean; data: DataPackage }>(
        `/packages/${packageId}`
      );
      return response.data;
    } catch (error) {
      console.error('Get package detail failed:', error);
      throw error;
    }
  }

  async buyPackage(data: BuyPackageRequest): Promise<BuyPackageResponse> {
    try {
      const response = await api.post<BuyPackageResponse>('/packages/buy', data);
      return response;
    } catch (error) {
      console.error('Buy package failed:', error);
      throw error;
    }
  }

  async getActivePackages(phoneNumber: string): Promise<DataPackage[]> {
    try {
      const response = await api.get<GetPackagesResponse>(
        `/packages/active?phone=${phoneNumber}`
      );
      return response.data;
    } catch (error) {
      console.error('Get active packages failed:', error);
      throw error;
    }
  }

  // Mock data for development
  private getMockPackages(): DataPackage[] {
    return [
      {
        id: '1',
        name: 'DATA NAME',
        dataAmount: '20GB/ngày',
        price: 70000,
        originalPrice: 80000,
        discount: 30,
        validity: '30 ngày',
        description: 'Miễn phí 800 phút gọi nội mạng',
        isHot: true,
      },
      {
        id: '2',
        name: 'DATA SUPER',
        dataAmount: '50GB/ngày',
        price: 120000,
        originalPrice: 150000,
        discount: 20,
        validity: '30 ngày',
        description: 'Miễn phí gọi không giới hạn nội mạng',
        isHot: true,
      },
      {
        id: '3',
        name: 'DATA MAX',
        dataAmount: '100GB/tháng',
        price: 200000,
        validity: '30 ngày',
        description: 'Data tốc độ cao + Gọi nội mạng miễn phí',
        isHot: false,
      },
    ];
  }
}

export default new PackageService();