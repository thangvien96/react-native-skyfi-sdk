"use strict";

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useVikkiSDKContext } from "../../context/VikkiSDKContext.js";
import PackageCard from "../DataPackages/PackageCard.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const HotPackages = () => {
  const {
    dataPackages
  } = useVikkiSDKContext();
  const handleViewAll = () => {
    console.log('View all packages');
  };
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsxs(View, {
      style: styles.header,
      children: [/*#__PURE__*/_jsx(Text, {
        style: styles.title,
        children: "G\xF3i c\u01B0\u1EDBc hot"
      }), /*#__PURE__*/_jsx(TouchableOpacity, {
        onPress: handleViewAll,
        children: /*#__PURE__*/_jsx(Text, {
          style: styles.viewAll,
          children: "Kh\xE1m ph\xE1"
        })
      })]
    }), dataPackages.map(pkg => /*#__PURE__*/_jsx(PackageCard, {
      package: pkg
    }, pkg.id))]
  });
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333'
  },
  viewAll: {
    fontSize: 14,
    color: '#0066FF',
    fontWeight: '500'
  }
});
export default HotPackages;
//# sourceMappingURL=HotPackages.js.map