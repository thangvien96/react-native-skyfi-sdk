"use strict";

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import ModalHeader from "../components/Modal/ModalHeader.js";
import PackageCard from "../components/DataPackages/PackageCard.js";
import { useVikkiSDKContext } from "../context/VikkiSDKContext.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PackagesScreen = () => {
  const {
    dataPackages
  } = useVikkiSDKContext();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = [{
    key: 'all',
    title: 'Tất cả'
  }, {
    key: 'data',
    title: 'Data'
  }, {
    key: 'call',
    title: 'Gọi thoại'
  }, {
    key: 'combo',
    title: 'Combo'
  }];
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [/*#__PURE__*/_jsx(ModalHeader, {
      title: "G\xF3i c\u01B0\u1EDBc"
    }), /*#__PURE__*/_jsx(View, {
      style: styles.searchContainer,
      children: /*#__PURE__*/_jsx(TextInput, {
        style: styles.searchInput,
        placeholder: "T\xECm ki\u1EBFm g\xF3i c\u01B0\u1EDBc...",
        value: searchQuery,
        onChangeText: setSearchQuery
      })
    }), /*#__PURE__*/_jsx(ScrollView, {
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      style: styles.categoriesContainer,
      contentContainerStyle: styles.categoriesContent,
      children: categories.map(category => {
        const isActive = activeCategory === category.key;
        return /*#__PURE__*/_jsx(TouchableOpacity, {
          style: [styles.categoryButton, isActive && styles.activeCategoryButton],
          onPress: () => setActiveCategory(category.key),
          children: /*#__PURE__*/_jsx(Text, {
            style: [styles.categoryText, isActive && styles.activeCategoryText],
            children: category.title
          })
        }, category.key);
      })
    }), /*#__PURE__*/_jsx(ScrollView, {
      style: styles.packageList,
      showsVerticalScrollIndicator: false,
      children: /*#__PURE__*/_jsx(View, {
        style: styles.packageListContent,
        children: dataPackages.map(pkg => /*#__PURE__*/_jsx(PackageCard, {
          package: pkg
        }, pkg.id))
      })
    })]
  });
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF'
  },
  searchInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15
  },
  categoriesContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'
  },
  categoriesContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 8
  },
  activeCategoryButton: {
    backgroundColor: '#0066FF'
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666'
  },
  activeCategoryText: {
    color: '#FFFFFF'
  },
  packageList: {
    flex: 1
  },
  packageListContent: {
    padding: 16
  }
});
export default PackagesScreen;
//# sourceMappingURL=PackagesScreen.js.map