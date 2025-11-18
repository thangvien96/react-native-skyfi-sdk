import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ModalHeader from '../components/Modal/ModalHeader';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

const RechargeScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const quickAmounts = [20000, 50000, 100000, 200000, 500000, 1000000];

  const handleQuickAmount = (value: number) => {
    setSelectedAmount(value);
    setAmount(value.toString());
  };

  const handleRecharge = () => {
    console.log('Recharge:', { phoneNumber, amount });
  };

  return (
    <View style={styles.container}>
      <ModalHeader title="Nạp tiền" />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Phone Number Input */}
        <Card style={styles.card}>
          <Text style={styles.label}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </Card>

        {/* Quick Amounts */}
        <Card style={styles.card}>
          <Text style={styles.label}>Chọn mệnh giá</Text>
          <View style={styles.amountGrid}>
            {quickAmounts.map((value) => {
              const isSelected = selectedAmount === value;
              return (
                <TouchableOpacity
                  key={value}
                  style={[
                    styles.amountButton,
                    isSelected && styles.selectedAmountButton,
                  ]}
                  onPress={() => handleQuickAmount(value)}
                >
                  <Text
                    style={[
                      styles.amountText,
                      isSelected && styles.selectedAmountText,
                    ]}
                  >
                    {(value / 1000).toFixed(0)}K
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Card>

        {/* Custom Amount */}
        <Card style={styles.card}>
          <Text style={styles.label}>Hoặc nhập số tiền</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số tiền"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
        </Card>

        {/* Payment Method */}
        <Card style={styles.card}>
          <Text style={styles.label}>Phương thức thanh toán</Text>
          <TouchableOpacity style={styles.paymentMethod}>
            <Text style={styles.paymentMethodIcon}>💳</Text>
            <View style={styles.paymentMethodInfo}>
              <Text style={styles.paymentMethodTitle}>Thẻ ATM / Visa</Text>
              <Text style={styles.paymentMethodSubtitle}>
                Thanh toán qua cổng thanh toán
              </Text>
            </View>
            <Text style={styles.paymentMethodArrow}>›</Text>
          </TouchableOpacity>
        </Card>

        {/* Summary */}
        {amount && (
          <Card style={styles.card}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tổng thanh toán</Text>
              <Text style={styles.summaryValue}>
                {parseInt(amount || '0').toLocaleString('vi-VN')} đ
              </Text>
            </View>
          </Card>
        )}

        {/* Recharge Button */}
        <Button
          title="Nạp tiền"
          onPress={handleRecharge}
          style={styles.rechargeButton}
          gradient
          disabled={!phoneNumber || !amount}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  amountGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  amountButton: {
    width: '30%',
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  selectedAmountButton: {
    backgroundColor: '#E6F0FF',
    borderColor: '#0066FF',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  selectedAmountText: {
    color: '#0066FF',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },
  paymentMethodIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  paymentMethodInfo: {
    flex: 1,
  },
  paymentMethodTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 2,
  },
  paymentMethodSubtitle: {
    fontSize: 13,
    color: '#666666',
  },
  paymentMethodArrow: {
    fontSize: 24,
    color: '#999999',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF3B30',
  },
  rechargeButton: {
    marginTop: 8,
    marginBottom: 32,
  },
});

export default RechargeScreen;