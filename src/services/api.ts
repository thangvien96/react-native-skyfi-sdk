import { Platform } from 'react-native';
import type { VikkiSDKConfig } from '../types';

class APIService {
  private baseURL: string = '';
  private apiKey: string = '';
  private headers: Record<string, string> = {};

  initialize(config: VikkiSDKConfig) {
    this.baseURL =
      config.environment === 'production'
        ? 'https://api.vikki.vn/v1'
        : 'https://api-dev.vikki.vn/v1';
    this.apiKey = config.apiKey;
    this.headers = {
      'Content-Type': 'application/json',
      'X-API-Key': this.apiKey,
      'X-Platform': Platform.OS,
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.headers,
          ...options.headers,
        },
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

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export default new APIService();