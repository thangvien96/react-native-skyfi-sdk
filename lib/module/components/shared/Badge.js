"use strict";

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { jsx as _jsx } from "react/jsx-runtime";
const Badge = ({
  text,
  backgroundColor = '#FF3B30',
  textColor = '#FFFFFF',
  style
}) => {
  return /*#__PURE__*/_jsx(View, {
    style: [styles.badge, {
      backgroundColor
    }, style],
    children: /*#__PURE__*/_jsx(Text, {
      style: [styles.text, {
        color: textColor
      }],
      children: text
    })
  });
};
const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start'
  },
  text: {
    fontSize: 12,
    fontWeight: '600'
  }
});
export default Badge;
//# sourceMappingURL=Badge.js.map