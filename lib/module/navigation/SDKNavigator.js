"use strict";

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from "../screens/HomeScreen.js";
import PackagesScreen from "../screens/PackagesScreen.js";
import RechargeScreen from "../screens/RechargeScreen.js";
import HistoryScreen from "../screens/HistoryScreen.js";
import BottomTabBar from "../components/shared/BottomTabBar.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SDKNavigator = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return /*#__PURE__*/_jsx(HomeScreen, {});
      case 'packages':
        return /*#__PURE__*/_jsx(PackagesScreen, {});
      case 'recharge':
        return /*#__PURE__*/_jsx(RechargeScreen, {});
      case 'history':
        return /*#__PURE__*/_jsx(HistoryScreen, {});
      default:
        return /*#__PURE__*/_jsx(HomeScreen, {});
    }
  };
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(View, {
      style: styles.content,
      children: renderScreen()
    }), /*#__PURE__*/_jsx(BottomTabBar, {
      activeTab: activeScreen,
      onTabChange: setActiveScreen
    })]
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  }
});
export default SDKNavigator;
//# sourceMappingURL=SDKNavigator.js.map