import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ModalHeader from '../components/Modal/ModalHeader';
import SimStatusCard from '../components/Home/SimStatusCard';
import ActionButtons from '../components/Home/ActionButtons';
import Banner from '../components/Home/Banner';
import HotPackages from '../components/Home/HotPackages';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ModalHeader title="Chào buổi sáng" />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <SimStatusCard />
        <ActionButtons />
        <Banner />
        <HotPackages />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
});

export default HomeScreen;