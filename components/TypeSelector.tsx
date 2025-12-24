import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

const types = ['Book', 'Goods', 'Cosmetics', 'Electronic', 'Medicine', 'Computer', 'Other'];

export default function TypeSelector() {
  const [selectedType, setSelectedType] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose type</Text>
      
      <View style={styles.tagsContainer}>
        {types.map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.tag,
              selectedType === type && styles.tagSelected,
            ]}
            onPress={() => setSelectedType(type)}
          >
            <Text
              style={[
                styles.tagText,
                selectedType === type && styles.tagTextSelected,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
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
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tag: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.cardBackground,
  },
  tagSelected: {
    backgroundColor: colors.primary,
  },
  tagText: {
    color: '#929C7E',
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  tagTextSelected: {
    color: colors.textDark,
  },
});