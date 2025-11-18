import React, { useEffect } from 'react';
import { Modal, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useVikkiSDKContext } from './context/VikkiSDKContext';
import SDKNavigator from './navigation/SDKNavigator';

const VikkiSDK: React.FC = () => {
  const { isVisible, closeSDK, checkSimStatus, fetchDataPackages } = useVikkiSDKContext();

  useEffect(() => {
    if (isVisible) {
      // Load data khi mở SDK
      checkSimStatus();
      fetchDataPackages();
    }
  }, [isVisible, checkSimStatus, fetchDataPackages]);

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={closeSDK}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SDKNavigator />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default VikkiSDK;