import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';
import { userData } from '../constants/mockData';

import PinIcon from '../assets/icons/pin.svg';
import ChevronIcon from '../assets/icons/chevron-down.svg';
import HelpIcon from '../assets/icons/help.svg';
import NotificationIcon from '../assets/icons/notification.svg';

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={userData.avatar} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{userData.name}</Text>
          <View style={styles.locationRow}>
            <PinIcon width={18} height={18} />
            <Text style={styles.location}>{userData.location}</Text>
            <View style={styles.chevronContainer}>
              <ChevronIcon width={10} height={6} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.helpIcon}>
          <HelpIcon width={20} height={20} />
        </View>
        <NotificationIcon width={24} height={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.border,
  },
  userInfo: {
    gap: spacing.xs,
  },
  name: {
    color: colors.textPrimary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs / 2,
  },
  location: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
  },
  chevronContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 2,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  helpIcon: {
    width: 20,
    height: 20,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});