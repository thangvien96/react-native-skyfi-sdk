"use strict";

import api from "./api.js";
class PackageService {
  async getPackages(category) {
    try {
      const endpoint = category ? `/packages?category=${category}` : '/packages';
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Get packages failed:', error);
      // Return mock data if API fails
      return this.getMockPackages();
    }
  }
  async getPackageDetail(packageId) {
    try {
      const response = await api.get(`/packages/${packageId}`);
      return response.data;
    } catch (error) {
      console.error('Get package detail failed:', error);
      throw error;
    }
  }
  async buyPackage(data) {
    try {
      const response = await api.post('/packages/buy', data);
      return response;
    } catch (error) {
      console.error('Buy package failed:', error);
      throw error;
    }
  }
  async getActivePackages(phoneNumber) {
    try {
      const response = await api.get(`/packages/active?phone=${phoneNumber}`);
      return response.data;
    } catch (error) {
      console.error('Get active packages failed:', error);
      throw error;
    }
  }

  // Mock data for development
  getMockPackages() {
    return [{
      id: '1',
      name: 'DATA NAME',
      dataAmount: '20GB/ngày',
      price: 70000,
      originalPrice: 80000,
      discount: 30,
      validity: '30 ngày',
      description: 'Miễn phí 800 phút gọi nội mạng',
      isHot: true
    }, {
      id: '2',
      name: 'DATA SUPER',
      dataAmount: '50GB/ngày',
      price: 120000,
      originalPrice: 150000,
      discount: 20,
      validity: '30 ngày',
      description: 'Miễn phí gọi không giới hạn nội mạng',
      isHot: true
    }, {
      id: '3',
      name: 'DATA MAX',
      dataAmount: '100GB/tháng',
      price: 200000,
      validity: '30 ngày',
      description: 'Data tốc độ cao + Gọi nội mạng miễn phí',
      isHot: false
    }];
  }
}
export default new PackageService();
//# sourceMappingURL=packageService.js.map