import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useVikkiSDKContext } from '../../context/VikkiSDKContext';
import Button from '../shared/Button';

const SimStatusCard: React.FC = () => {
  const { simStatus } = useVikkiSDKContext();

  const handleActivateSim = () => {
    console.log('Activate SIM');
  };

  const handleBuySim = () => {
    console.log('Buy SIM');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>📱</Text>
        </View>
      </View>

      <Text style={styles.title}>Bạn đã có SIM SkyFi chưa?</Text>
      <Text style={styles.subtitle}>
        Nhận Mua SkyFi+ để mua sim chính chủ dễ dàng, thoải mái gọi cuộc hợp.
      </Text>

      <View style={styles.buttonsRow}>
        <Button
          title="Kích hoạt SIM"
          onPress={handleActivateSim}
          style={styles.activateButton}
          textStyle={styles.activateButtonText}
        />
        
        <Button
          title="Mua SIM"
          onPress={handleBuySim}
          style={styles.buyButton}
          textStyle={styles.buyButtonText}
          gradient
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: 16,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  activateButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0066FF',
  },
  activateButtonText: {
    color: '#0066FF',
  },
  buyButton: {
    flex: 1,
  },
  buyButtonText: {
    color: '#FFFFFF',
  },
});

export default SimStatusCard;