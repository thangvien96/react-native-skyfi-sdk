import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PackagesScreen from '../screens/PackagesScreen';
import RechargeScreen from '../screens/RechargeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import BottomTabBar from '../components/shared/BottomTabBar';

export type Screen = 'home' | 'packages' | 'recharge' | 'history';

const SDKNavigator: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen />;
      case 'packages':
        return <PackagesScreen />;
      case 'recharge':
        return <RechargeScreen />;
      case 'history':
        return <HistoryScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <BottomTabBar activeTab={activeScreen} onTabChange={setActiveScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default SDKNavigator;