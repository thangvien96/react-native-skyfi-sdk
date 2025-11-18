import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

// Import từ SDK
import { VikkiSDKProvider, useVikkiSDKContext } from '../../src/context/VikkiSDKContext';
import VikkiSDK from '../../src/VikkiSDK';

// Component con sử dụng context
function AppContent() {
  const { openSDK } = useVikkiSDKContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vikki SDK Demo</Text>
      <Text style={styles.subtitle}>
        Nhấn vào button bên dưới để mở SDK
      </Text>

      <TouchableOpacity style={styles.openButton} onPress={openSDK}>
        <Text style={styles.openButtonText}>Mở SDK Vikki</Text>
      </TouchableOpacity>

      <View style={styles.features}>
        <Text style={styles.featuresTitle}>Tính năng SDK:</Text>
        <Text style={styles.featureItem}>✓ Quản lý SIM</Text>
        <Text style={styles.featureItem}>✓ Mua gói cước</Text>
        <Text style={styles.featureItem}>✓ Nạp tiền điện thoại</Text>
        <Text style={styles.featureItem}>✓ Lịch sử giao dịch</Text>
        <Text style={styles.featureItem}>✓ eSIM du lịch</Text>
      </View>
    </View>
  );
}

// Component chính
function App() {
  return (
    <VikkiSDKProvider
      config={{
        apiKey: 'your-api-key-here',
        environment: 'development',
        userId: 'user123',
        theme: {
          primaryColor: '#0066FF',
          secondaryColor: '#FF6B35',
        },
      }}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <AppContent />
        <VikkiSDK />
      </SafeAreaView>
    </VikkiSDKProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  openButton: {
    backgroundColor: '#0066FF',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#0066FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  openButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  features: {
    marginTop: 60,
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
  },
  featureItem: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 12,
    lineHeight: 22,
  },
});

export default App;