"use strict";

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  loading = false,
  gradient = false,
  variant = 'primary'
}) => {
  const buttonStyle = [styles.button, variant === 'primary' && styles.primaryButton, variant === 'secondary' && styles.secondaryButton, variant === 'outline' && styles.outlineButton, gradient && styles.gradientButton, disabled && styles.disabledButton, style];
  const textStyleCombined = [styles.text, variant === 'primary' && styles.primaryText, variant === 'secondary' && styles.secondaryText, variant === 'outline' && styles.outlineText, gradient && styles.gradientText, disabled && styles.disabledText, textStyle];
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    style: buttonStyle,
    onPress: onPress,
    disabled: disabled || loading,
    activeOpacity: 0.8,
    children: loading ? /*#__PURE__*/_jsx(ActivityIndicator, {
      color: variant === 'outline' ? '#0066FF' : gradient ? '#FFFFFF' : '#FFFFFF'
    }) : /*#__PURE__*/_jsx(Text, {
      style: textStyleCombined,
      children: title
    })
  });
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48
  },
  primaryButton: {
    backgroundColor: '#0066FF'
  },
  secondaryButton: {
    backgroundColor: '#F0F0F0'
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0066FF'
  },
  gradientButton: {
    backgroundColor: '#FF7849',
    shadowColor: '#FF6B35',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
    opacity: 0.6
  },
  text: {
    fontSize: 15,
    fontWeight: '600'
  },
  primaryText: {
    color: '#FFFFFF'
  },
  secondaryText: {
    color: '#333333'
  },
  outlineText: {
    color: '#0066FF'
  },
  gradientText: {
    color: '#FFFFFF'
  },
  disabledText: {
    color: '#999999'
  }
});
export default Button;
//# sourceMappingURL=Button.js.map