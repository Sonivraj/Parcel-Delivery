import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

interface FormInputProps extends TextInputProps {
  multiline?: boolean;
}

export default function FormInput({ multiline, ...props }: FormInputProps) {
  return (
    <TextInput
      style={[styles.input, multiline && styles.multilineInput]}
      placeholderTextColor={colors.textPrimary}
      multiline={multiline}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.primaryDark,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md + 4,
    color: colors.textPrimary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});