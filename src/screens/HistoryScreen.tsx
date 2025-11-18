import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ModalHeader from '../components/Modal/ModalHeader';
import Card from '../components/shared/Card';

interface Transaction {
  id: string;
  type: 'recharge' | 'package' | 'call';
  title: string;
  description: string;
  amount: number;
  date: string;
  status: 'success' | 'pending' | 'failed';
}

const HistoryScreen: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'package',
      title: 'Đăng ký gói DATA NAME',
      description: '20GB/ngày - 30 ngày',
      amount: -70000,
      date: '2024-01-15 10:30',
      status: 'success',
    },
    {
      id: '2',
      type: 'recharge',
      title: 'Nạp tiền',
      description: 'Qua ví MoMo',
      amount: 100000,
      date: '2024-01-14 15:20',
      status: 'success',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return '#34C759';
      case 'pending':
        return '#FF9500';
      case 'failed':
        return '#FF3B30';
      default:
        return '#999999';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'success':
        return 'Thành công';
      case 'pending':
        return 'Đang xử lý';
      case 'failed':
        return 'Thất bại';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <ModalHeader title="Lịch sử giao dịch" />

      {/* Balance Card */}
      <Card style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Số dư khả dụng</Text>
        <Text style={styles.balanceAmount}>125,000 đ</Text>
        <View style={styles.balanceActions}>
          <TouchableOpacity style={styles.balanceButton}>
            <Text style={styles.balanceButtonText}>Nạp tiền</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.balanceButton, styles.transferButton]}>
            <Text style={[styles.balanceButtonText, styles.transferButtonText]}>
              Chuyển tiền
            </Text>
          </TouchableOpacity>
        </View>
      </Card>

      {/* Transactions */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Giao dịch gần đây</Text>

        {transactions.map((transaction) => (
          <TouchableOpacity key={transaction.id}>
            <Card style={styles.transactionCard}>
              <View style={styles.transactionHeader}>
                <View style={styles.transactionIcon}>
                  <Text style={styles.transactionIconText}>
                    {transaction.type === 'recharge'
                      ? '💰'
                      : transaction.type === 'package'
                      ? '📦'
                      : '📞'}
                  </Text>
                </View>

                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionTitle}>
                    {transaction.title}
                  </Text>
                  <Text style={styles.transactionDescription}>
                    {transaction.description}
                  </Text>
                  <Text style={styles.transactionDate}>{transaction.date}</Text>
                </View>

                <View style={styles.transactionRight}>
                  <Text
                    style={[
                      styles.transactionAmount,
                      { color: transaction.amount > 0 ? '#34C759' : '#333333' },
                    ]}
                  >
                    {transaction.amount > 0 ? '+' : ''}
                    {transaction.amount.toLocaleString('vi-VN')} đ
                  </Text>
                  <Text
                    style={[
                      styles.transactionStatus,
                      { color: getStatusColor(transaction.status) },
                    ]}
                  >
                    {getStatusText(transaction.status)}
                  </Text>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  balanceCard: {
    margin: 16,
    padding: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 20,
  },
  balanceActions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  balanceButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#0066FF',
    alignItems: 'center',
  },
  balanceButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  transferButton: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  transferButtonText: {
    color: '#333333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  transactionCard: {
    marginBottom: 12,
    padding: 12,
  },
  transactionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionIconText: {
    fontSize: 24,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  transactionDescription: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: '#999999',
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default HistoryScreen;