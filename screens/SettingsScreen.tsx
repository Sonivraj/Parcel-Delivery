import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';

import CustomStatusBar from '../components/CustomStatusBar';
import StatCard from '../components/StatCard';
import SettingsMenuItem from '../components/SettingsMenuItem';
import { userData } from '../constants/mockData';

import ArrowLeftIcon from '../assets/icons/arrow-left.svg';
import PinIcon from '../assets/icons/pin.svg';
import ChevronIcon from '../assets/icons/chevron-down.svg';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function SettingsScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.goBack();
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
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image source={userData.avatar} style={styles.avatar} />
          <Text style={styles.userName}>CHUON Raksa</Text>
          <View style={styles.locationRow}>
            <PinIcon width={16} height={16} />
            <Text style={styles.location}>{userData.location}</Text>
            <View style={styles.chevronContainer}>
              <ChevronIcon width={8} height={5} />
            </View>
          </View>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <StatCard value="0 Progress" label="delivery" variant="primary" />
          <StatCard value="12 Parcels" label="send" />
          <StatCard value="30 Parcels" label="completed" />
        </View>

        {/* Overviews Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overviews</Text>
          
          <View style={styles.menuList}>
            <SettingsMenuItem 
              icon={<Text style={styles.menuIcon}>👤</Text>}
              label="Account"
            />
            <SettingsMenuItem 
              icon={<Text style={styles.menuIcon}>📍</Text>}
              label="Address"
            />
            <SettingsMenuItem 
              icon={<Text style={styles.menuIcon}>🎧</Text>}
              label="Contact Us"
            />
            <SettingsMenuItem 
              icon={<Text style={styles.menuIcon}>ℹ️</Text>}
              label="About Us"
            />
            <SettingsMenuItem 
              icon={<Text style={styles.menuIcon}>⚙️</Text>}
              label="Setting"
            />
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutIcon}>🚪</Text>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.versionText}>App version 1.0.0</Text>
      </ScrollView>
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
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
    gap: spacing.lg + spacing.sm,
  },
  profileSection: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.lg,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  userName: {
    color: colors.textPrimary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  location: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
  },
  chevronContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 2,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  section: {
    gap: spacing.md,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
  },
  menuList: {
    gap: spacing.sm,
  },
  menuIcon: {
    fontSize: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.lg,
  },
  logoutIcon: {
    fontSize: 20,
  },
  logoutText: {
    color: colors.textSecondary,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.42,
  },
  versionText: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    textAlign: 'center',
    marginTop: spacing.md,
  },
});