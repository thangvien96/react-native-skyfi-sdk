"use strict";

import { Platform } from 'react-native';
class APIService {
  baseURL = '';
  apiKey = '';
  headers = {};
  initialize(config) {
    this.baseURL = config.environment === 'production' ? 'https://api.vikki.vn/v1' : 'https://api-dev.vikki.vn/v1';
    this.apiKey = config.apiKey;
    this.headers = {
      'Content-Type': 'application/json',
      'X-API-Key': this.apiKey,
      'X-Platform': Platform.OS
    };
  }
  async request(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.headers,
          ...options.headers
        }
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Request failed');
      }
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }
  async get(endpoint) {
    return this.request(endpoint, {
      method: 'GET'
    });
  }
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE'
    });
  }
}
export default new APIService();
//# sourceMappingURL=api.js.map