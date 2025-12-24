import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

import SearchIcon from '../assets/icons/search.svg';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Search parcel</Text>
      <View style={styles.inputContainer}>
        <SearchIcon width={24} height={24} />
        <TextInput
          style={styles.input}
          placeholder="Your parcel code.."
          placeholderTextColor={colors.textSecondary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
    paddingHorizontal: spacing.md,
  },
  label: {
    color: colors.textSecondary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 4,
    minHeight: 50,
  },
  input: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Open Sans',
  },
});