"use strict";

import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

// const { width } = Dimensions.get('window');
import { jsx as _jsx } from "react/jsx-runtime";
const Banner = () => {
  const handleBannerPress = () => {
    console.log('Banner pressed');
  };
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    style: styles.container,
    onPress: handleBannerPress,
    activeOpacity: 0.9,
    children: /*#__PURE__*/_jsx(Image, {
      source: {
        uri: 'https://www.skyfi.vn/assets/hero/hero2.png'
      },
      style: styles.image,
      resizeMode: "cover"
    })
  });
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  image: {
    width: '100%',
    height: 150
  }
});
export default Banner;
//# sourceMappingURL=Banner.js.map