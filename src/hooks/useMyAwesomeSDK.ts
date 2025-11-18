import { useEffect, useState, useCallback, useRef } from 'react';
import MyAwesomeSDK, { type SDKConfig } from '../index';

export interface UseMyAwesomeSDKOptions {
  config: SDKConfig;
  autoInitialize?: boolean;
}

export function useMyAwesomeSDK(options: UseMyAwesomeSDKOptions) {
  const { config, autoInitialize = true } = options;
  
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const initializeRef = useRef(false);

  const initialize = useCallback(async () => {
    if (initializeRef.current) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      initializeRef.current = true;
      const result = await MyAwesomeSDK.initialize(config);
      setIsInitialized(result);
    } catch (err) {
      setError(err as Error);
      setIsInitialized(false);
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  const fetchData = useCallback(
    async (url: string) => {
      try {
        return await MyAwesomeSDK.fetchData(url);
      } catch (err) {
        setError(err as Error);
        throw err;
      }
    },
    []
  );

  useEffect(() => {
    if (autoInitialize && !initializeRef.current) {
      initialize();
    }

    return () => {
      MyAwesomeSDK.removeAllListeners();
    };
  }, [autoInitialize, initialize]);

  return {
    isInitialized,
    isLoading,
    error,
    initialize,
    fetchData,
    multiply: MyAwesomeSDK.multiply.bind(MyAwesomeSDK),
    getDeviceInfo: MyAwesomeSDK.getDeviceInfo.bind(MyAwesomeSDK),
    startMonitoring: MyAwesomeSDK.startMonitoring.bind(MyAwesomeSDK),
    addEventListener: MyAwesomeSDK.addEventListener.bind(MyAwesomeSDK),
  };
}