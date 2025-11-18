"use strict";

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const BottomTabBar = ({
  activeTab,
  onTabChange
}) => {
  const tabs = [{
    key: 'home',
    title: 'Trang chủ',
    icon: '🏠'
  }, {
    key: 'packages',
    title: 'Hỗ trợ',
    icon: '📋'
  }, {
    key: 'history',
    title: 'Của mình',
    icon: '👤'
  }];
  return /*#__PURE__*/_jsx(View, {
    style: styles.container,
    children: tabs.map(tab => {
      const isActive = activeTab === tab.key;
      return /*#__PURE__*/_jsxs(TouchableOpacity, {
        style: styles.tab,
        onPress: () => onTabChange(tab.key),
        activeOpacity: 0.7,
        children: [/*#__PURE__*/_jsx(Text, {
          style: styles.icon,
          children: tab.icon
        }), /*#__PURE__*/_jsx(Text, {
          style: [styles.title, isActive && styles.activeTitle],
          children: tab.title
        }), isActive && /*#__PURE__*/_jsx(View, {
          style: styles.indicator
        })]
      }, tab.key);
    })
  });
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingBottom: 8,
    paddingTop: 8
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    position: 'relative'
  },
  icon: {
    fontSize: 24,
    marginBottom: 4
  },
  title: {
    fontSize: 12,
    color: '#999999',
    fontWeight: '500'
  },
  activeTitle: {
    color: '#0066FF',
    fontWeight: '600'
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    width: 32,
    height: 3,
    backgroundColor: '#0066FF',
    borderRadius: 2
  }
});
export default BottomTabBar;
//# sourceMappingURL=BottomTabBar.js.map