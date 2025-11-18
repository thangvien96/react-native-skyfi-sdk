import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useVikkiSDKContext } from '../../context/VikkiSDKContext';

interface ModalHeaderProps {
  title?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title = 'Chào buổi sáng' }) => {
  const { closeSDK } = useVikkiSDKContext();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={closeSDK} style={styles.backButton}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>{title}</Text>
      
      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.cartIcon}>🛒</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#333333',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    flex: 1,
    textAlign: 'center',
  },
  cartButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    fontSize: 20,
  },
});

export default ModalHeader;