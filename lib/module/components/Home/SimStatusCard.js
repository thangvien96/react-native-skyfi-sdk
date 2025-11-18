"use strict";

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { useVikkiSDKContext } from '../../context/VikkiSDKContext';
import Button from "../shared/Button.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SimStatusCard = () => {
  // const { simStatus } = useVikkiSDKContext();

  const handleActivateSim = () => {
    console.log('Activate SIM');
  };
  const handleBuySim = () => {
    console.log('Buy SIM');
  };
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(View, {
      style: styles.iconContainer,
      children: /*#__PURE__*/_jsx(View, {
        style: styles.iconCircle,
        children: /*#__PURE__*/_jsx(Text, {
          style: styles.iconText,
          children: "\uD83D\uDCF1"
        })
      })
    }), /*#__PURE__*/_jsx(Text, {
      style: styles.title,
      children: "B\u1EA1n \u0111\xE3 c\xF3 SIM SkyFi ch\u01B0a?"
    }), /*#__PURE__*/_jsx(Text, {
      style: styles.subtitle,
      children: "Nh\u1EADn Mua SkyFi+ \u0111\u1EC3 mua sim ch\xEDnh ch\u1EE7 d\u1EC5 d\xE0ng, tho\u1EA3i m\xE1i g\u1ECDi cu\u1ED9c h\u1EE3p."
    }), /*#__PURE__*/_jsxs(View, {
      style: styles.buttonsRow,
      children: [/*#__PURE__*/_jsx(Button, {
        title: "K\xEDch ho\u1EA1t SIM",
        onPress: handleActivateSim,
        style: styles.activateButton,
        textStyle: styles.activateButtonText
      }), /*#__PURE__*/_jsx(Button, {
        title: "Mua SIM",
        onPress: handleBuySim,
        style: styles.buyButton,
        textStyle: styles.buyButtonText,
        gradient: true
      })]
    })]
  });
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  iconContainer: {
    marginBottom: 16
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconText: {
    fontSize: 32
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%'
  },
  activateButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0066FF'
  },
  activateButtonText: {
    color: '#0066FF'
  },
  buyButton: {
    flex: 1
  },
  buyButtonText: {
    color: '#FFFFFF'
  }
});
export default SimStatusCard;
//# sourceMappingURL=SimStatusCard.js.map