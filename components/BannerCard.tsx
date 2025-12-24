import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';
import { bannerData } from '../constants/mockData';

import TimerCircle from '../assets/icons/timer-circle.svg';
import ScooterImage from '../assets/images/scooter.svg';
import CarouselDots from '../assets/icons/carousel-dots.svg';

type RootStackParamList = {
  Home: undefined;
  Booking: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function BannerCard() {
  const banner = bannerData[0];
  const navigation = useNavigation<NavigationProp>();
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 380;
  const scooterWidth = isSmallScreen ? width * 0.4 : 200;
  const scooterHeight = (scooterWidth * 88) / 200;

  const handleBookNow = () => {
    navigation.navigate('Booking');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <Text style={styles.title}>{banner.title}</Text>
          <Text style={styles.subtitle}>{banner.subtitle}</Text>
          <View style={styles.timerContainer}>
            <TimerCircle width={100} height={100} />
            <View style={styles.timerText}>
              <Text style={styles.minutes}>{banner.minutes}</Text>
              <Text style={styles.minLabel}>min</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightSection}>
          <ScooterImage width={scooterWidth} height={scooterHeight} />
          <TouchableOpacity onPress={handleBookNow}>
            <Text style={styles.cta}>{banner.cta}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dotsContainer}>
        <CarouselDots width={66} height={6} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    justifyContent: 'space-between',
    minHeight: 160,
  },
  leftSection: {
    gap: spacing.xs,
  },
  title: {
    color: colors.textWhite,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.6,
  },
  subtitle: {
    color: colors.primary,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.bold,
    fontFamily: 'Inter',
    letterSpacing: -0.6,
  },
  timerContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    marginTop: spacing.sm,
  },
  timerText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minutes: {
    color: colors.textWhite,
    fontSize: 24,
    fontWeight: fontWeights.bold,
    fontFamily: 'Inter',
  },
  minLabel: {
    color: colors.textWhite,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
  },
  rightSection: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cta: {
    color: colors.textDark,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
    textDecorationLine: 'underline',
  },
  dotsContainer: {
    alignItems: 'center',
  },
});