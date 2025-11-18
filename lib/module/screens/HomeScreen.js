"use strict";

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ModalHeader from "../components/Modal/ModalHeader.js";
import SimStatusCard from "../components/Home/SimStatusCard.js";
import ActionButtons from "../components/Home/ActionButtons.js";
import Banner from "../components/Home/Banner.js";
import HotPackages from "../components/Home/HotPackages.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const HomeScreen = () => {
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(ModalHeader, {
      title: "Ch\xE0o bu\u1ED5i s\xE1ng"
    }), /*#__PURE__*/_jsxs(ScrollView, {
      style: styles.scrollView,
      showsVerticalScrollIndicator: false,
      children: [/*#__PURE__*/_jsx(SimStatusCard, {}), /*#__PURE__*/_jsx(ActionButtons, {}), /*#__PURE__*/_jsx(Banner, {}), /*#__PURE__*/_jsx(HotPackages, {})]
    })]
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  scrollView: {
    flex: 1
  }
});
export default HomeScreen;
//# sourceMappingURL=HomeScreen.js.map