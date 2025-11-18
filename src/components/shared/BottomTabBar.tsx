import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { Screen } from '../../navigation/SDKNavigator';

interface Tab {
  key: Screen;
  title: string;
  icon: string;
}

interface BottomTabBarProps {
  activeTab: Screen;
  onTabChange: (tab: Screen) => void;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, onTabChange }) => {
  const tabs: Tab[] = [
    { key: 'home', title: 'Trang chủ', icon: '🏠' },
    { key: 'packages', title: 'Hỗ trợ', icon: '📋' },
    { key: 'history', title: 'Của mình', icon: '👤' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onTabChange(tab.key)}
            activeOpacity={0.7}
          >
            <Text style={styles.icon}>{tab.icon}</Text>
            <Text style={[styles.title, isActive && styles.activeTitle]}>
              {tab.title}
            </Text>
            {isActive && <View style={styles.indicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingBottom: 8,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    position: 'relative',
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: '#999999',
    fontWeight: '500',
  },
  activeTitle: {
    color: '#0066FF',
    fontWeight: '600',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    width: 32,
    height: 3,
    backgroundColor: '#0066FF',
    borderRadius: 2,
  },
});

export default BottomTabBar;