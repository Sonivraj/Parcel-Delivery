import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

import SuccessIcon from '../assets/icons/success-check.svg';
import RadioUnselectedIcon from '../assets/icons/radio-unselected.svg';

const paymentMethods = [
  { id: 'cash', label: 'Case on Delivery', icon: '💵' },
  { id: 'card', label: 'Visa/Mastercard/JCB', icon: '💳' },
  { id: 'paypal', label: 'PayPal', icon: '🅿️' },
];

export default function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState('cash');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment method</Text>
      
      <View style={styles.methodsContainer}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={styles.methodRow}
            onPress={() => setSelectedMethod(method.id)}
          >
            <View style={styles.methodLeft}>
              <Text style={styles.methodIcon}>{method.icon}</Text>
              <Text style={styles.methodLabel}>{method.label}</Text>
            </View>
            {selectedMethod === method.id ? (
              <SuccessIcon width={18} height={18} />
            ) : (
              <RadioUnselectedIcon width={16} height={16} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
    paddingHorizontal: spacing.md,
  },
  title: {
    color: colors.textSecondary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
  },
  methodsContainer: {
    gap: spacing.sm,
  },
  methodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  methodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  methodIcon: {
    fontSize: 20,
  },
  methodLabel: {
    color: colors.textPrimary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.42,
  },
});