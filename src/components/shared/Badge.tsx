import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';

interface BadgeProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  backgroundColor = '#FF3B30',
  textColor = '#FFFFFF',
  style,
}) => {
  return (
    <View style={[styles.badge, { backgroundColor }, style]}>
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Badge;