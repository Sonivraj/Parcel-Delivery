import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

interface StatCardProps {
  value: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

export default function StatCard({ value, label, variant = 'secondary' }: StatCardProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.card,
        variant === 'primary' && styles.cardPrimary,
      ]}
    >
      <Text style={[styles.value, variant === 'primary' && styles.valuePrimary]}>
        {value}
      </Text>
      <Text style={[styles.label, variant === 'primary' && styles.labelPrimary]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    gap: spacing.xs,
  },
  cardPrimary: {
    backgroundColor: '#E9FAC8',
  },
  value: {
    color: colors.textPrimary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.42,
  },
  valuePrimary: {
    color: colors.textDark,
  },
  label: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  labelPrimary: {
    color: colors.textDark,
  },
});