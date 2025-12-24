import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

import SuccessIcon from '../assets/icons/success-check.svg';
import RadioUnselectedIcon from '../assets/icons/radio-unselected.svg';
import DollarIcon from '../assets/icons/dollar.svg';
import ClockLightIcon from '../assets/icons/clock-light.svg';

export default function TimeSelector() {
  const [selectedTime, setSelectedTime] = useState<'express' | 'schedule'>('express');
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 380;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collect time</Text>
      
      <View style={[styles.optionsContainer, isSmallScreen && styles.optionsContainerSmall]}>
        {/* Express Option */}
        <TouchableOpacity
          style={[
            styles.optionCard,
            selectedTime === 'express' && styles.optionCardSelected,
            isSmallScreen && styles.optionCardSmall,
          ]}
          onPress={() => setSelectedTime('express')}
        >
          <View style={styles.optionHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.optionTitle}>Express</Text>
              <Text style={styles.optionSubtitle}>Collect time 10-20 min</Text>
            </View>
            {selectedTime === 'express' ? (
              <SuccessIcon width={18} height={18} />
            ) : (
              <View style={styles.radioPlaceholder} />
            )}
          </View>
          
          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryLabel}>Delivery to receiver</Text>
            <Text style={styles.deliveryTime}>1-2 hours</Text>
          </View>
        </TouchableOpacity>

        {/* Schedule Option */}
        <TouchableOpacity
          style={[
            styles.optionCard,
            selectedTime === 'schedule' && styles.optionCardSelected,
            isSmallScreen && styles.optionCardSmall,
          ]}
          onPress={() => setSelectedTime('schedule')}
        >
          <View style={styles.optionHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.optionTitle}>Schedule</Text>
              <Text style={styles.optionSubtitle}>Choose available time</Text>
            </View>
            {selectedTime === 'schedule' ? (
              <SuccessIcon width={18} height={18} />
            ) : (
              <RadioUnselectedIcon width={16} height={16} />
            )}
          </View>
          
          <View style={styles.scheduleInfo}>
            <View style={styles.infoRow}>
              <DollarIcon width={14} height={14} />
              <Text style={styles.infoText}>Flexible price</Text>
            </View>
            <View style={styles.infoRow}>
              <ClockLightIcon width={14} height={14} />
              <Text style={styles.infoText}>Plan 2 day ahead</Text>
            </View>
          </View>
        </TouchableOpacity>
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
  optionsContainer: {
    flexDirection: 'row',
    gap: spacing.md + 2,
  },
  optionsContainerSmall: {
    flexDirection: 'column',
  },
  optionCard: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    gap: spacing.md,
    minHeight: 109,
  },
  optionCardSmall: {
    flex: 0,
  },
  optionCardSelected: {
    borderWidth: 1,
    borderColor: '#E9FAC8',
  },
  optionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  headerLeft: {
    gap: spacing.sm,
    flex: 1,
  },
  optionTitle: {
    color: colors.textPrimary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.42,
  },
  optionSubtitle: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  radioPlaceholder: {
    width: 18,
    height: 18,
  },
  deliveryInfo: {
    gap: spacing.sm,
  },
  deliveryLabel: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  deliveryTime: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  scheduleInfo: {
    gap: spacing.xs,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  infoText: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
  },
});