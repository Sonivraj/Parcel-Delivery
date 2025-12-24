import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

import CustomStatusBar from '../components/CustomStatusBar';
import StepIndicator from '../components/StepIndicator';
import FormInput from '../components/FormInput';
import TypeSelector from '../components/TypeSelector';
import BottomPriceBar from '../components/BottomPriceBar';

import ArrowLeftIcon from '../assets/icons/arrow-left.svg';

type RootStackParamList = {
  Home: undefined;
  Booking: undefined;
  Information: undefined;
  Confirmation: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function InformationScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleProcessNext = () => {
    navigation.navigate('Confirmation');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <CustomStatusBar />
      
      {/* Back Navigation */}
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeftIcon width={16} height={16} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.content}>
          <StepIndicator currentStep={2} />
          
          {/* Sender Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sender details</Text>
            <View style={styles.formCard}>
              <FormInput placeholder="Enter sender name" />
              <FormInput placeholder="Enter sender phone" keyboardType="phone-pad" />
              <FormInput placeholder="Sender remarks" multiline />
            </View>
          </View>

          {/* Receiver Details */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Receiver details</Text>
              <TouchableOpacity>
                <Text style={styles.saveText}>Save for later</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formCard}>
              <FormInput placeholder="Enter receiver name" />
              <FormInput placeholder="Enter receiver phone" keyboardType="phone-pad" />
              <FormInput placeholder="Sender remarks" multiline />
            </View>
          </View>

          <TypeSelector />
          
          {/* Bottom spacing for fixed price bar */}
          <View style={styles.bottomSpacer} />
        </View>
      </ScrollView>

      {/* Fixed Bottom Price Bar */}
      <BottomPriceBar price="$2.00" onPress={handleProcessNext} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topNav: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 4,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  backText: {
    color: colors.textPrimary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.42,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  content: {
    gap: spacing.xxl,
    paddingTop: spacing.md,
  },
  section: {
    gap: spacing.md,
    paddingHorizontal: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
  },
  saveText: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  formCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    gap: spacing.md,
  },
  bottomSpacer: {
    height: spacing.xl,
  },
});