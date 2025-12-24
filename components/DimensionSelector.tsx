import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

const dimensions = ['10 cm', '20 cm', '30 cm', '40 cm', '50 cm'];

export default function DimensionSelector() {
  const [selectedDimension, setSelectedDimension] = useState('30 cm');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dimension</Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dimensionsContainer}
      >
        {dimensions.map((dimension) => (
          <TouchableOpacity
            key={dimension}
            style={[
              styles.dimensionButton,
              selectedDimension === dimension && styles.dimensionButtonSelected,
            ]}
            onPress={() => setSelectedDimension(dimension)}
          >
            <Text
              style={[
                styles.dimensionText,
                selectedDimension === dimension && styles.dimensionTextSelected,
              ]}
            >
              {dimension}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  dimensionsContainer: {
    gap: spacing.lg,
    paddingRight: spacing.md,
  },
  dimensionButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.cardBackground,
    minWidth: 60,
    alignItems: 'center',
  },
  dimensionButtonSelected: {
    backgroundColor: colors.primary,
  },
  dimensionText: {
    color: '#929C7E',
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  dimensionTextSelected: {
    color: colors.textDark,
  },
});