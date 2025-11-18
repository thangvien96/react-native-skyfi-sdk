"use strict";

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { jsx as _jsx } from "react/jsx-runtime";
const Card = ({
  children,
  style,
  padding = 16
}) => {
  return /*#__PURE__*/_jsx(View, {
    style: [styles.card, {
      padding
    }, style],
    children: children
  });
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  }
});
export default Card;
//# sourceMappingURL=Card.js.map