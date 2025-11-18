import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useVikkiSDKContext } from '../../context/VikkiSDKContext';
import PackageCard from '../DataPackages/PackageCard';

const HotPackages: React.FC = () => {
  const { dataPackages } = useVikkiSDKContext();

  const handleViewAll = () => {
    console.log('View all packages');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gói cước hot</Text>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.viewAll}>Khám phá</Text>
        </TouchableOpacity>
      </View>

      {dataPackages.map((pkg) => (
        <PackageCard key={pkg.id} package={pkg} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  viewAll: {
    fontSize: 14,
    color: '#0066FF',
    fontWeight: '500',
  },
});

export default HotPackages;