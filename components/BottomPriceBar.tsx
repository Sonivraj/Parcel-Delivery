import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

interface BottomPriceBarProps {
  price: string;
  onPress: () => void;
}

export default function BottomPriceBar({ price, onPress }: BottomPriceBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.priceSection}>
        <View style={styles.priceHeader}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.vatLabel}>(incl. VAT)</Text>
        </View>
        <Text style={styles.priceText}>{price}</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Process Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg + spacing.xs,
    borderTopLeftRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.lg,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.md,
  },
  priceSection: {
    gap: spacing.sm,
  },
  priceHeader: {
    flexDirection: 'row',
    gap: spacing.xs,
    alignItems: 'center',
  },
  totalLabel: {
    color: colors.textPrimary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  vatLabel: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  priceText: {
    color: colors.primary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg + spacing.sm,
  },
  buttonText: {
    color: colors.textDark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
});