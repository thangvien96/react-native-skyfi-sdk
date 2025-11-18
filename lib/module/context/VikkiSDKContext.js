"use strict";

import { createContext, useContext, useState, useCallback } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
const VikkiSDKContext = /*#__PURE__*/createContext(undefined);
export function VikkiSDKProvider({
  config,
  children
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [simStatus, setSimStatus] = useState(null);
  const [dataPackages, setDataPackages] = useState([]);
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
        status: 'inactive'
      });
    } catch (error) {
      console.error('Check sim status failed:', error);
    }
  }, []);
  const fetchDataPackages = useCallback(async () => {
    try {
      setDataPackages([{
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
      }]);
    } catch (error) {
      console.error('Fetch data packages failed:', error);
    }
  }, []);
  return /*#__PURE__*/_jsx(VikkiSDKContext.Provider, {
    value: {
      config,
      isVisible,
      simStatus,
      dataPackages,
      openSDK,
      closeSDK,
      checkSimStatus,
      fetchDataPackages
    },
    children: children
  });
}
export function useVikkiSDKContext() {
  const context = useContext(VikkiSDKContext);
  if (!context) {
    throw new Error('useVikkiSDKContext must be used within VikkiSDKProvider');
  }
  return context;
}
//# sourceMappingURL=VikkiSDKContext.js.map