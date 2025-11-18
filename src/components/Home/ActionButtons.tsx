import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { ActionButton } from '../../types';

const ActionButtons: React.FC = () => {
  const buttons: ActionButton[] = [
    {
      id: '1',
      title: 'Mua SIM',
      icon: '📱',
      color: '#0066FF',
      onPress: () => console.log('Mua SIM'),
    },
    {
      id: '2',
      title: 'Gói cước',
      icon: '📊',
      color: '#8B5CF6',
      onPress: () => console.log('Gói cước'),
    },
    {
      id: '3',
      title: 'Nạp tiền',
      icon: '💳',
      color: '#EC4899',
      onPress: () => console.log('Nạp tiền'),
    },
    {
      id: '4',
      title: 'eSIM du lịch',
      icon: '✈️',
      color: '#F59E0B',
      onPress: () => console.log('eSIM du lịch'),
    },
  ];

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.id}
          style={styles.button}
          onPress={button.onPress}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { backgroundColor: button.color }]}>
            <Text style={styles.icon}>{button.icon}</Text>
          </View>
          <Text style={styles.title}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 28,
  },
  title: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default ActionButtons;