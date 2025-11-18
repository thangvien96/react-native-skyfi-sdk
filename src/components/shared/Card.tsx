import React from 'react';
import type { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
  padding?: number;
}

const Card: React.FC<CardProps> = ({ children, style, padding = 16 }) => {
  return (
    <View style={[styles.card, { padding }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Card;