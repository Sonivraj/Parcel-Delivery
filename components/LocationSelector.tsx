import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

import EditIcon from '../assets/icons/edit.svg';
import ClockIcon from '../assets/icons/clock-gray.svg';
import LocationLineIcon from '../assets/icons/location-line.svg';

export default function LocationSelector() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select location</Text>
      
      <View style={styles.card}>
        <View style={styles.addressContainer}>
          {/* Collect From */}
          <View style={styles.addressSection}>
            <View style={styles.addressHeader}>
              <View style={styles.headerLeft}>
                <Text style={styles.addressLabel}>Collect from</Text>
                <Text style={styles.addressSubLabel}>Sender address</Text>
              </View>
              <TouchableOpacity>
                <EditIcon width={24} height={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.addressText}>
              Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road, Phnom Penh
            </Text>
          </View>

          {/* Delivery To */}
          <View style={styles.addressSection}>
            <View style={styles.addressHeader}>
              <View style={styles.headerLeft}>
                <Text style={styles.addressLabel}>Delivery to</Text>
                <Text style={styles.addressSubLabel}>Receiver address</Text>
              </View>
              <TouchableOpacity>
                <EditIcon width={24} height={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.addressText}>
              2nd Floor 01, 25 Mao Tse Toung Blvd (245), Phnom Penh 12302, Cambodia
            </Text>
          </View>
        </View>

        {/* Time Estimate */}
        <View style={styles.timeButton}>
          <ClockIcon width={20} height={20} />
          <Text style={styles.timeText}>Take around 20 min</Text>
        </View>

        {/* Location Line Icon */}
        <View style={styles.locationLineContainer}>
          <LocationLineIcon width={24} height={116} />
        </View>
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
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    position: 'relative',
  },
  addressContainer: {
    gap: spacing.xl,
    paddingLeft: spacing.lg,
  },
  addressSection: {
    gap: spacing.sm + 4,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerLeft: {
    gap: spacing.sm,
  },
  addressLabel: {
    color: colors.textPrimary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.42,
  },
  addressSubLabel: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  addressText: {
    color: colors.textPrimary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
    lineHeight: 25,
  },
  timeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: colors.primaryDark,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    alignSelf: 'flex-start',
    marginTop: spacing.md,
    marginLeft: spacing.lg,
  },
  timeText: {
    color: '#E9FAC8',
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  locationLineContainer: {
    position: 'absolute',
    left: spacing.md,
    top: spacing.lg,
  },
});