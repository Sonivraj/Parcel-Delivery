import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, fontSizes, fontWeights } from '../constants/theme';

import ReceptionIcon from '../assets/icons/reception.svg';
import WifiIcon from '../assets/icons/wifi.svg';
import BatteryIcon from '../assets/icons/battery.svg';

export default function CustomStatusBar() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <ReceptionIcon width={17} height={10} />
        <Text style={styles.text}>StaySafe</Text>
        <WifiIcon width={17} height={12} />
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.text}>100%</Text>
        <BatteryIcon width={27} height={12} />
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
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  text: {
    color: colors.textWhite,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    letterSpacing: -0.12,
  },
});