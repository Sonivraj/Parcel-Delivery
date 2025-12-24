import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import CustomStatusBar from '../components/CustomStatusBar';
import ProfileHeader from '../components/ProfileHeader';
import SearchBar from '../components/SearchBar';
import BannerCard from '../components/BannerCard';
import MenuGrid from '../components/MenuGrid';
import TrackingCard from '../components/TrackingCard';
import { colors, spacing } from '../constants/theme';

type RootStackParamList = {
  Home: undefined;
  Booking: undefined;
  Settings: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleMenuPress = (menuId: number) => {
    // Deliveries (id: 1) navigates to booking flow
    if (menuId === 1) {
      navigation.navigate('Booking');
    } 
    // Setting (id: 4) navigates to settings screen
    else if (menuId === 4) {
      navigation.navigate('Settings');
    } 
    else {
      // For other menu items, show coming soon message
      const menuNames: { [key: number]: string } = {
        2: 'Support',
        3: 'My Order',
      };
      console.log(`${menuNames[menuId]} feature coming soon...`);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <CustomStatusBar />
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <ProfileHeader />
          <SearchBar />
          <BannerCard />
          <MenuGrid onMenuPress={handleMenuPress} />
          <TrackingCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    gap: spacing.xxl,
    paddingVertical: spacing.sm,
  },
});