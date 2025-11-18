"use strict";

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ModalHeader from "../components/Modal/ModalHeader.js";
import Card from "../components/shared/Card.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const HistoryScreen = () => {
  const transactions = [{
    id: '1',
    type: 'package',
    title: 'Đăng ký gói DATA NAME',
    description: '20GB/ngày - 30 ngày',
    amount: -70000,
    date: '2024-01-15 10:30',
    status: 'success'
  }, {
    id: '2',
    type: 'recharge',
    title: 'Nạp tiền',
    description: 'Qua ví MoMo',
    amount: 100000,
    date: '2024-01-14 15:20',
    status: 'success'
  }];
  const getStatusColor = status => {
    switch (status) {
      case 'success':
        return '#34C759';
      case 'pending':
        return '#FF9500';
      case 'failed':
        return '#FF3B30';
      default:
        return '#999999';
    }
  };
  const getStatusText = status => {
    switch (status) {
      case 'success':
        return 'Thành công';
      case 'pending':
        return 'Đang xử lý';
      case 'failed':
        return 'Thất bại';
      default:
        return '';
    }
  };
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(ModalHeader, {
      title: "L\u1ECBch s\u1EED giao d\u1ECBch"
    }), /*#__PURE__*/_jsxs(Card, {
      style: styles.balanceCard,
      children: [/*#__PURE__*/_jsx(Text, {
        style: styles.balanceLabel,
        children: "S\u1ED1 d\u01B0 kh\u1EA3 d\u1EE5ng"
      }), /*#__PURE__*/_jsx(Text, {
        style: styles.balanceAmount,
        children: "125,000 \u0111"
      }), /*#__PURE__*/_jsxs(View, {
        style: styles.balanceActions,
        children: [/*#__PURE__*/_jsx(TouchableOpacity, {
          style: styles.balanceButton,
          children: /*#__PURE__*/_jsx(Text, {
            style: styles.balanceButtonText,
            children: "N\u1EA1p ti\u1EC1n"
          })
        }), /*#__PURE__*/_jsx(TouchableOpacity, {
          style: [styles.balanceButton, styles.transferButton],
          children: /*#__PURE__*/_jsx(Text, {
            style: [styles.balanceButtonText, styles.transferButtonText],
            children: "Chuy\u1EC3n ti\u1EC1n"
          })
        })]
      })]
    }), /*#__PURE__*/_jsxs(ScrollView, {
      style: styles.content,
      showsVerticalScrollIndicator: false,
      children: [/*#__PURE__*/_jsx(Text, {
        style: styles.sectionTitle,
        children: "Giao d\u1ECBch g\u1EA7n \u0111\xE2y"
      }), transactions.map(transaction => /*#__PURE__*/_jsx(TouchableOpacity, {
        children: /*#__PURE__*/_jsx(Card, {
          style: styles.transactionCard,
          children: /*#__PURE__*/_jsxs(View, {
            style: styles.transactionHeader,
            children: [/*#__PURE__*/_jsx(View, {
              style: styles.transactionIcon,
              children: /*#__PURE__*/_jsx(Text, {
                style: styles.transactionIconText,
                children: transaction.type === 'recharge' ? '💰' : transaction.type === 'package' ? '📦' : '📞'
              })
            }), /*#__PURE__*/_jsxs(View, {
              style: styles.transactionInfo,
              children: [/*#__PURE__*/_jsx(Text, {
                style: styles.transactionTitle,
                children: transaction.title
              }), /*#__PURE__*/_jsx(Text, {
                style: styles.transactionDescription,
                children: transaction.description
              }), /*#__PURE__*/_jsx(Text, {
                style: styles.transactionDate,
                children: transaction.date
              })]
            }), /*#__PURE__*/_jsxs(View, {
              style: styles.transactionRight,
              children: [/*#__PURE__*/_jsxs(Text, {
                style: [styles.transactionAmount, {
                  color: transaction.amount > 0 ? '#34C759' : '#333333'
                }],
                children: [transaction.amount > 0 ? '+' : '', transaction.amount.toLocaleString('vi-VN'), " \u0111"]
              }), /*#__PURE__*/_jsx(Text, {
                style: [styles.transactionStatus, {
                  color: getStatusColor(transaction.status)
                }],
                children: getStatusText(transaction.status)
              })]
            })]
          })
        })
      }, transaction.id))]
    })]
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  balanceCard: {
    margin: 16,
    padding: 20,
    alignItems: 'center'
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 20
  },
  balanceActions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%'
  },
  balanceButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#0066FF',
    alignItems: 'center'
  },
  balanceButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  transferButton: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E5E5E5'
  },
  transferButtonText: {
    color: '#333333'
  },
  content: {
    flex: 1,
    paddingHorizontal: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12
  },
  transactionCard: {
    marginBottom: 12,
    padding: 12
  },
  transactionHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  transactionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  transactionIconText: {
    fontSize: 24
  },
  transactionInfo: {
    flex: 1
  },
  transactionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4
  },
  transactionDescription: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 4
  },
  transactionDate: {
    fontSize: 12,
    color: '#999999'
  },
  transactionRight: {
    alignItems: 'flex-end'
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: '500'
  }
});
export default HistoryScreen;
//# sourceMappingURL=HistoryScreen.js.map