import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { VikkiSDKConfig, SimStatus, DataPackage } from '../types';

interface VikkiSDKContextType {
  config: VikkiSDKConfig;
  isVisible: boolean;
  simStatus: SimStatus | null;
  dataPackages: DataPackage[];
  openSDK: () => void;
  closeSDK: () => void;
  checkSimStatus: () => Promise<void>;
  fetchDataPackages: () => Promise<void>;
}

const VikkiSDKContext = createContext<VikkiSDKContextType | undefined>(undefined);

interface VikkiSDKProviderProps {
  config: VikkiSDKConfig;
  children: ReactNode;
}

export function VikkiSDKProvider({ config, children }: VikkiSDKProviderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [simStatus, setSimStatus] = useState<SimStatus | null>(null);
  const [dataPackages, setDataPackages] = useState<DataPackage[]>([]);

  const openSDK = useCallback(() => {
    setIsVisible(true);
  }, []);

  const closeSDK = useCallback(() => {
    setIsVisible(false);
  }, []);

  const checkSimStatus = useCallback(async () => {
    try {
      setSimStatus({
        hasSim: false,
        status: 'inactive',
      });
    } catch (error) {
      console.error('Check sim status failed:', error);
    }
  }, []);

  const fetchDataPackages = useCallback(async () => {
    try {
      setDataPackages([
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
      ]);
    } catch (error) {
      console.error('Fetch data packages failed:', error);
    }
  }, []);

  return (
    <VikkiSDKContext.Provider
      value={{
        config,
        isVisible,
        simStatus,
        dataPackages,
        openSDK,
        closeSDK,
        checkSimStatus,
        fetchDataPackages,
      }}
    >
      {children}
    </VikkiSDKContext.Provider>
  );
}

export function useVikkiSDKContext() {
  const context = useContext(VikkiSDKContext);
  if (!context) {
    throw new Error('useVikkiSDKContext must be used within VikkiSDKProvider');
  }
  return context;
}