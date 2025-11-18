"use strict";

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useVikkiSDKContext } from "../../context/VikkiSDKContext.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ModalHeader = ({
  title = 'Chào buổi sáng'
}) => {
  const {
    closeSDK
  } = useVikkiSDKContext();
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(TouchableOpacity, {
      onPress: closeSDK,
      style: styles.backButton,
      children: /*#__PURE__*/_jsx(Text, {
        style: styles.backIcon,
        children: "\u2190"
      })
    }), /*#__PURE__*/_jsx(Text, {
      style: styles.title,
      children: title
    }), /*#__PURE__*/_jsx(TouchableOpacity, {
      style: styles.cartButton,
      children: /*#__PURE__*/_jsx(Text, {
        style: styles.cartIcon,
        children: "\uD83D\uDED2"
      })
    })]
  });
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backIcon: {
    fontSize: 24,
    color: '#333333'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    flex: 1,
    textAlign: 'center'
  },
  cartButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartIcon: {
    fontSize: 20
  }
});
export default ModalHeader;
//# sourceMappingURL=ModalHeader.js.map