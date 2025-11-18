import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import ModalHeader from '../components/Modal/ModalHeader';
import PackageCard from '../components/DataPackages/PackageCard';
import { useVikkiSDKContext } from '../context/VikkiSDKContext';

type Category = 'all' | 'data' | 'call' | 'combo';

const PackagesScreen: React.FC = () => {
  const { dataPackages } = useVikkiSDKContext();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', title: 'Tất cả' },
    { key: 'data', title: 'Data' },
    { key: 'call', title: 'Gọi thoại' },
    { key: 'combo', title: 'Combo' },
  ];

  return (
    <View style={styles.container}>
      <ModalHeader title="Gói cước" />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm gói cước..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.key;
          return (
            <TouchableOpacity
              key={category.key}
              style={[styles.categoryButton, isActive && styles.activeCategoryButton]}
              onPress={() => setActiveCategory(category.key as Category)}
            >
              <Text
                style={[styles.categoryText, isActive && styles.activeCategoryText]}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Package List */}
      <ScrollView style={styles.packageList} showsVerticalScrollIndicator={false}>
        <View style={styles.packageListContent}>
          {dataPackages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  searchInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
  },
  categoriesContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  categoriesContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 8,
  },
  activeCategoryButton: {
    backgroundColor: '#0066FF',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  packageList: {
    flex: 1,
  },
  packageListContent: {
    padding: 16,
  },
});

export default PackagesScreen;