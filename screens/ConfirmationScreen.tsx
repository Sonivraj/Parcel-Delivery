import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, spacing, fontSizes, fontWeights } from '../constants/theme';

import CustomStatusBar from '../components/CustomStatusBar';
import StepIndicator from '../components/StepIndicator';
import AddressSummary from '../components/AddressSummary';
import PaymentMethod from '../components/PaymentMethod';
import OrderSummary from '../components/OrderSummary';
import BottomPriceBar from '../components/BottomPriceBar';

import ArrowLeftIcon from '../assets/icons/arrow-left.svg';

type RootStackParamList = {
  Home: undefined;
  Booking: undefined;
  Information: undefined;
  Confirmation: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ConfirmationScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleProcessNext = () => {
    Alert.alert(
      'Success! 🎉',
      'Your parcel delivery has been booked successfully!',
      [
        {
          text: 'Go to Home',
          onPress: () => {
            navigation.navigate('Home');
          },
        },
      ]
    );
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
          <StepIndicator currentStep={3} />
          <AddressSummary />
          <PaymentMethod />
          <OrderSummary />
          
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
  bottomSpacer: {
    height: spacing.xl,
  },
});