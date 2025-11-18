"use strict";

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Badge from "../shared/Badge.js";
import Button from "../shared/Button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PackageCard = ({
  package: pkg
}) => {
  const handleBuy = () => {
    console.log('Buy package:', pkg.id);
  };
  const handleInfo = () => {
    console.log('View package info:', pkg.id);
  };
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsxs(View, {
      style: styles.header,
      children: [/*#__PURE__*/_jsxs(View, {
        children: [/*#__PURE__*/_jsxs(View, {
          style: styles.titleRow,
          children: [/*#__PURE__*/_jsx(Text, {
            style: styles.title,
            children: pkg.name
          }), pkg.discount && /*#__PURE__*/_jsx(Badge, {
            text: `-${pkg.discount}%`,
            backgroundColor: "#FF3B30"
          })]
        }), /*#__PURE__*/_jsx(Text, {
          style: styles.dataAmount,
          children: pkg.dataAmount
        })]
      }), /*#__PURE__*/_jsx(TouchableOpacity, {
        onPress: handleInfo,
        children: /*#__PURE__*/_jsx(Text, {
          style: styles.infoIcon,
          children: "\u24D8"
        })
      })]
    }), /*#__PURE__*/_jsx(Text, {
      style: styles.description,
      children: pkg.description
    }), /*#__PURE__*/_jsxs(View, {
      style: styles.footer,
      children: [/*#__PURE__*/_jsxs(View, {
        children: [/*#__PURE__*/_jsxs(View, {
          style: styles.priceRow,
          children: [/*#__PURE__*/_jsxs(Text, {
            style: styles.price,
            children: [pkg.price.toLocaleString('vi-VN'), " VN\u0110"]
          }), pkg.originalPrice && /*#__PURE__*/_jsx(Text, {
            style: styles.originalPrice,
            children: pkg.originalPrice.toLocaleString('vi-VN')
          })]
        }), /*#__PURE__*/_jsxs(Text, {
          style: styles.validity,
          children: ["H\u1EA1n d\xF9ng: ", pkg.validity]
        })]
      }), /*#__PURE__*/_jsx(Button, {
        title: "\u0110\u0103ng k\xFD",
        onPress: handleBuy,
        style: styles.buyButton,
        gradient: true
      })]
    })]
  });
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333'
  },
  dataAmount: {
    fontSize: 14,
    color: '#666666'
  },
  infoIcon: {
    fontSize: 20,
    color: '#999999'
  },
  description: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 12
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF3B30'
  },
  originalPrice: {
    fontSize: 14,
    color: '#999999',
    textDecorationLine: 'line-through'
  },
  validity: {
    fontSize: 12,
    color: '#999999'
  },
  buyButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    minWidth: 100
  }
});
export default PackageCard;
//# sourceMappingURL=PackageCard.js.map