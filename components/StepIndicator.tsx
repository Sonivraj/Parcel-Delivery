import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, fontSizes, fontWeights } from '../constants/theme';

import StepBasicIcon from '../assets/icons/step-basic.svg';
import StepCompleteIcon from '../assets/icons/step-complete.svg';
import StepInfoIcon from '../assets/icons/step-info.svg';
import StepConfirmIcon from '../assets/icons/step-confirm.svg';

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { id: 1, icon: StepBasicIcon, completeIcon: StepCompleteIcon, label: 'STEP 1', title: 'Basic Details' },
    { id: 2, icon: StepInfoIcon, completeIcon: null, label: 'STEP 2', title: 'Information' },
    { id: 3, icon: StepConfirmIcon, completeIcon: null, label: 'STEP 3', title: 'Confirmation' },
  ];

  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isComplete = step.id < currentStep;
        const isActive = step.id === currentStep;
        const IconComponent = isComplete && step.completeIcon ? step.completeIcon : step.icon;
        
        return (
          <React.Fragment key={step.id}>
            <View style={styles.stepItem}>
              <View style={[styles.iconContainer, isActive && styles.iconContainerActive]}>
                <IconComponent width={24} height={24} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.stepLabel}>{step.label}</Text>
                <Text style={styles.stepTitle}>{step.title}</Text>
              </View>
            </View>
            {index < steps.length - 1 && (
              <View style={[styles.line, isComplete && styles.lineComplete]} />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    flexWrap: 'wrap',
  },
  stepItem: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerActive: {
    backgroundColor: 'rgba(155, 254, 3, 0.1)',
  },
  textContainer: {
    alignItems: 'center',
    gap: spacing.xs,
  },
  stepLabel: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  stepTitle: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  line: {
    width: 87,
    height: 2,
    backgroundColor: colors.textPrimary,
    alignSelf: 'center',
    marginTop: 20,
  },
  lineComplete: {
    backgroundColor: colors.primary,
  },
});