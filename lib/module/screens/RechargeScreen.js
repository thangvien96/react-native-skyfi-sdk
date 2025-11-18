"use strict";

import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ModalHeader from "../components/Modal/ModalHeader.js";
import Button from "../components/shared/Button.js";
import Card from "../components/shared/Card.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RechargeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const quickAmounts = [20000, 50000, 100000, 200000, 500000, 1000000];
  const handleQuickAmount = value => {
    setSelectedAmount(value);
    setAmount(value.toString());
  };
  const handleRecharge = () => {
    console.log('Recharge:', {
      phoneNumber,
      amount
    });
  };
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(ModalHeader, {
      title: "N\u1EA1p ti\u1EC1n"
    }), /*#__PURE__*/_jsxs(ScrollView, {
      style: styles.content,
      showsVerticalScrollIndicator: false,
      children: [/*#__PURE__*/_jsxs(Card, {
        style: styles.card,
        children: [/*#__PURE__*/_jsx(Text, {
          style: styles.label,
          children: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"
        }), /*#__PURE__*/_jsx(TextInput, {
          style: styles.input,
          placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
          value: phoneNumber,
          onChangeText: setPhoneNumber,
          keyboardType: "phone-pad",
          maxLength: 10
        })]
      }), /*#__PURE__*/_jsxs(Card, {
        style: styles.card,
        children: [/*#__PURE__*/_jsx(Text, {
          style: styles.label,
          children: "Ch\u1ECDn m\u1EC7nh gi\xE1"
        }), /*#__PURE__*/_jsx(View, {
          style: styles.amountGrid,
          children: quickAmounts.map(value => {
            const isSelected = selectedAmount === value;
            return /*#__PURE__*/_jsx(TouchableOpacity, {
              style: [styles.amountButton, isSelected && styles.selectedAmountButton],
              onPress: () => handleQuickAmount(value),
              children: /*#__PURE__*/_jsxs(Text, {
                style: [styles.amountText, isSelected && styles.selectedAmountText],
                children: [(value / 1000).toFixed(0), "K"]
              })
            }, value);
          })
        })]
      }), /*#__PURE__*/_jsxs(Card, {
        style: styles.card,
        children: [/*#__PURE__*/_jsx(Text, {
          style: styles.label,
          children: "Ho\u1EB7c nh\u1EADp s\u1ED1 ti\u1EC1n"
        }), /*#__PURE__*/_jsx(TextInput, {
          style: styles.input,
          placeholder: "Nh\u1EADp s\u1ED1 ti\u1EC1n",
          value: amount,
          onChangeText: setAmount,
          keyboardType: "numeric"
        })]
      }), /*#__PURE__*/_jsxs(Card, {
        style: styles.card,
        children: [/*#__PURE__*/_jsx(Text, {
          style: styles.label,
          children: "Ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n"
        }), /*#__PURE__*/_jsxs(TouchableOpacity, {
          style: styles.paymentMethod,
          children: [/*#__PURE__*/_jsx(Text, {
            style: styles.paymentMethodIcon,
            children: "\uD83D\uDCB3"
          }), /*#__PURE__*/_jsxs(View, {
            style: styles.paymentMethodInfo,
            children: [/*#__PURE__*/_jsx(Text, {
              style: styles.paymentMethodTitle,
              children: "Th\u1EBB ATM / Visa"
            }), /*#__PURE__*/_jsx(Text, {
              style: styles.paymentMethodSubtitle,
              children: "Thanh to\xE1n qua c\u1ED5ng thanh to\xE1n"
            })]
          }), /*#__PURE__*/_jsx(Text, {
            style: styles.paymentMethodArrow,
            children: "\u203A"
          })]
        })]
      }), amount && /*#__PURE__*/_jsx(Card, {
        style: styles.card,
        children: /*#__PURE__*/_jsxs(View, {
          style: styles.summaryRow,
          children: [/*#__PURE__*/_jsx(Text, {
            style: styles.summaryLabel,
            children: "T\u1ED5ng thanh to\xE1n"
          }), /*#__PURE__*/_jsxs(Text, {
            style: styles.summaryValue,
            children: [parseInt(amount || '0').toLocaleString('vi-VN'), " \u0111"]
          })]
        })
      }), /*#__PURE__*/_jsx(Button, {
        title: "N\u1EA1p ti\u1EC1n",
        onPress: handleRecharge,
        style: styles.rechargeButton,
        gradient: true,
        disabled: !phoneNumber || !amount
      })]
    })]
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  content: {
    flex: 1,
    padding: 16
  },
  card: {
    marginBottom: 16
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5'
  },
  amountGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12
  },
  amountButton: {
    width: '30%',
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5'
  },
  selectedAmountButton: {
    backgroundColor: '#E6F0FF',
    borderColor: '#0066FF'
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333'
  },
  selectedAmountText: {
    color: '#0066FF'
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 12
  },
  paymentMethodIcon: {
    fontSize: 24,
    marginRight: 12
  },
  paymentMethodInfo: {
    flex: 1
  },
  paymentMethodTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 2
  },
  paymentMethodSubtitle: {
    fontSize: 13,
    color: '#666666'
  },
  paymentMethodArrow: {
    fontSize: 24,
    color: '#999999'
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  summaryLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333'
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF3B30'
  },
  rechargeButton: {
    marginTop: 8,
    marginBottom: 32
  }
});
export default RechargeScreen;
//# sourceMappingURL=RechargeScreen.js.map