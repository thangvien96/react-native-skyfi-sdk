"use strict";

import { useCallback } from 'react';
import { useVikkiSDKContext } from "../context/VikkiSDKContext.js";
export const useVikkiSDK = () => {
  const context = useVikkiSDKContext();
  const buyPackage = useCallback(async packageId => {
    try {
      // Call API to buy package
      console.log('Buying package:', packageId);
      // const result = await api.buyPackage(packageId);
      return {
        success: true
      };
    } catch (error) {
      console.error('Buy package failed:', error);
      throw error;
    }
  }, []);
  const recharge = useCallback(async (phoneNumber, amount) => {
    try {
      // Call API to recharge
      console.log('Recharging:', {
        phoneNumber,
        amount
      });
      // const result = await api.recharge(phoneNumber, amount);
      return {
        success: true
      };
    } catch (error) {
      console.error('Recharge failed:', error);
      throw error;
    }
  }, []);
  const getTransactionHistory = useCallback(async () => {
    try {
      // Call API to get transactions
      console.log('Getting transaction history');
      // const transactions = await api.getTransactions();
      return [];
    } catch (error) {
      console.error('Get transactions failed:', error);
      throw error;
    }
  }, []);
  return {
    ...context,
    buyPackage,
    recharge,
    getTransactionHistory
  };
};
//# sourceMappingURL=useVikkiSDK.js.map