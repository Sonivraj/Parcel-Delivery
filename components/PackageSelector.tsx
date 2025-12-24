import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { colors, spacing, fontSizes, fontWeights } from '../constants/theme';

import PackageTypesImage from '../assets/images/package-types.svg';

export default function PackageSelector() {
  const { width } = useWindowDimensions();
  const imageWidth = width - (spacing.md * 2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose package type</Text>
      <View style={styles.imageContainer}>
        <PackageTypesImage width={imageWidth} height={94} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm + 4,
    paddingHorizontal: spacing.md,
  },
  title: {
    color: colors.textSecondary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
  },
  imageContainer: {
    width: '100%',
  },
});