import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, fontSizes, fontWeights } from '../constants/theme';

const summaryItems = [
  { label: 'Size', value: '20 cm' },
  { label: 'Category', value: 'Electronics' },
  { label: 'Express', value: '$1.50' },
  { label: 'Insurance', value: '$0.50' },
];

export default function OrderSummary() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order summary</Text>
      
      <View style={styles.summaryList}>
        {summaryItems.map((item, index) => (
          <View key={index} style={styles.summaryRow}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
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
  summaryList: {
    gap: spacing.sm,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: colors.textSecondary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.42,
  },
  value: {
    color: colors.textPrimary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.42,
  },
});