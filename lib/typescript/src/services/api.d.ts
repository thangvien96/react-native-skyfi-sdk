import type { VikkiSDKConfig } from '../types';
declare class APIService {
    private baseURL;
    private apiKey;
    private headers;
    initialize(config: VikkiSDKConfig): void;
    private request;
    get<T>(endpoint: string): Promise<T>;
    post<T>(endpoint: string, data?: any): Promise<T>;
    put<T>(endpoint: string, data?: any): Promise<T>;
    delete<T>(endpoint: string): Promise<T>;
}
declare const _default: APIService;
export default _default;
//# sourceMappingURL=api.d.ts.map