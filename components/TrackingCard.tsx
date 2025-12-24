import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';
import { trackingData } from '../constants/mockData';

import LocationPins from '../assets/icons/location-pins.svg';
import MapImage from '../assets/images/map.svg';

type RootStackParamList = {
  Home: undefined;
  Booking: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function TrackingCard() {
  const navigation = useNavigation<NavigationProp>();
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 380;
  const cardWidth = width - (spacing.md * 2);
  
  // Responsive map size
  const mapWidth = isSmallScreen ? cardWidth * 0.45 : Math.min(196, cardWidth * 0.48);
  const mapHeight = (mapWidth * 232) / 196;
  
  // Responsive location pins
  const pinsHeight = isSmallScreen ? 90 : 106;
  
  const handleCardPress = () => {
    navigation.navigate('Booking');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracking parcel</Text>
      
      <TouchableOpacity style={styles.card} onPress={handleCardPress} activeOpacity={0.8}>
        <View style={styles.leftSection}>
          <View style={styles.infoSection}>
            <Text style={styles.label}>Tracking ID</Text>
            <Text style={styles.value}>{trackingData.trackingId}</Text>
          </View>
          
          <View style={styles.routeContainer}>
            <View style={styles.locationGroup}>
              <View style={styles.locationInfo}>
                <Text style={styles.label}>From</Text>
                <Text style={styles.value} numberOfLines={1}>{trackingData.from.location}</Text>
              </View>
              <View style={styles.senderRow}>
                <Text style={styles.label}>Sender</Text>
                <Text style={styles.value}>{trackingData.from.sender}</Text>
              </View>
            </View>
            
            <View style={styles.locationGroup}>
              <View style={styles.locationInfo}>
                <Text style={styles.label}>Delivery to</Text>
                <Text style={styles.value} numberOfLines={1}>{trackingData.to.location}</Text>
              </View>
              <View style={styles.senderRow}>
                <Text style={styles.label}>Receiver</Text>
                <Text style={styles.value}>{trackingData.to.receiver}</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.pinsContainer}>
            <LocationPins width={20} height={pinsHeight} />
          </View>
        </View>
        
        <View style={styles.rightSection}>
          <MapImage width={mapWidth} height={mapHeight} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },
  title: {
    color: colors.textSecondary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.48,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
    position: 'relative',
    paddingLeft: spacing.sm,
  },
  infoSection: {
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  routeContainer: {
    gap: spacing.lg + spacing.xs,
    paddingVertical: spacing.xs,
  },
  locationGroup: {
    gap: spacing.xs,
  },
  locationInfo: {
    gap: 4,
  },
  senderRow: {
    flexDirection: 'row',
    gap: spacing.xs,
    flexWrap: 'wrap',
  },
  label: {
    color: colors.textSecondary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
  },
  value: {
    color: colors.textPrimary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
    flexShrink: 1,
  },
  pinsContainer: {
    position: 'absolute',
    left: -8,
    top: 60,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});