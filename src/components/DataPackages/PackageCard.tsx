import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { DataPackage } from '../../types';
import Badge from '../shared/Badge';
import Button from '../shared/Button';

interface PackageCardProps {
  package: DataPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  const handleBuy = () => {
    console.log('Buy package:', pkg.id);
  };

  const handleInfo = () => {
    console.log('View package info:', pkg.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{pkg.name}</Text>
            {pkg.discount && (
              <Badge 
                text={`-${pkg.discount}%`} 
                backgroundColor="#FF3B30"
              />
            )}
          </View>
          <Text style={styles.dataAmount}>{pkg.dataAmount}</Text>
        </View>
        
        <TouchableOpacity onPress={handleInfo}>
          <Text style={styles.infoIcon}>ⓘ</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>{pkg.description}</Text>

      <View style={styles.footer}>
        <View>
          <View style={styles.priceRow}>
            <Text style={styles.price}>
              {pkg.price.toLocaleString('vi-VN')} VNĐ
            </Text>
            {pkg.originalPrice && (
              <Text style={styles.originalPrice}>
                {pkg.originalPrice.toLocaleString('vi-VN')}
              </Text>
            )}
          </View>
          <Text style={styles.validity}>Hạn dùng: {pkg.validity}</Text>
        </View>

        <Button
          title="Đăng ký"
          onPress={handleBuy}
          style={styles.buyButton}
          gradient
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  dataAmount: {
    fontSize: 14,
    color: '#666666',
  },
  infoIcon: {
    fontSize: 20,
    color: '#999999',
  },
  description: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF3B30',
  },
  originalPrice: {
    fontSize: 14,
    color: '#999999',
    textDecorationLine: 'line-through',
  },
  validity: {
    fontSize: 12,
    color: '#999999',
  },
  buyButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    minWidth: 100,
  },
});

export default PackageCard;