"use strict";

import React, { useEffect } from 'react';
import { Modal, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useVikkiSDKContext } from "./context/VikkiSDKContext.js";
import SDKNavigator from "./navigation/SDKNavigator.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const VikkiSDK = () => {
  const {
    isVisible,
    closeSDK,
    checkSimStatus,
    fetchDataPackages
  } = useVikkiSDKContext();
  useEffect(() => {
    if (isVisible) {
      // Load data khi mở SDK
      checkSimStatus();
      fetchDataPackages();
    }
  }, [isVisible, checkSimStatus, fetchDataPackages]);
  return /*#__PURE__*/_jsx(Modal, {
    visible: isVisible,
    animationType: "slide",
    presentationStyle: "pageSheet",
    onRequestClose: closeSDK,
    children: /*#__PURE__*/_jsxs(SafeAreaView, {
      style: styles.container,
      children: [/*#__PURE__*/_jsx(StatusBar, {
        barStyle: "dark-content"
      }), /*#__PURE__*/_jsx(SDKNavigator, {})]
    })
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  }
});
export default VikkiSDK;
//# sourceMappingURL=VikkiSDK.js.map