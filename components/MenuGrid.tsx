import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../constants/theme';
import { menuItems, userData } from '../constants/mockData';

import DeliveriesIcon from '../assets/icons/deliveries.svg';
import SupportIcon from '../assets/icons/support.svg';
import MyOrderIcon from '../assets/icons/my-order.svg';
import SettingIcon from '../assets/icons/setting.svg';

const iconMap: { [key: string]: React.FC<any> } = {
  deliveries: DeliveriesIcon,
  support: SupportIcon,
  'my-order': MyOrderIcon,
  setting: SettingIcon,
};

interface MenuGridProps {
  onMenuPress?: (menuId: number) => void;
}

export default function MenuGrid({ onMenuPress }: MenuGridProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 380;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menus</Text>
      <View style={[styles.card, isSmallScreen && styles.cardSmall]}>
        <View style={styles.profileSection}>
          <Image source={userData.avatar} style={styles.avatar} />
          <Text style={styles.name}>Raksa</Text>
        </View>
        <View style={[styles.menuSection, isSmallScreen && styles.menuSectionSmall]}>
          <View style={styles.row}>
            {menuItems.slice(0, 2).map((item) => {
              const IconComponent = iconMap[item.iconName];
              return (
                <TouchableOpacity 
                  key={item.id} 
                  style={[styles.menuButton, { backgroundColor: item.backgroundColor }]}
                  onPress={() => onMenuPress?.(item.id)}
                >
                  <IconComponent width={17} height={17} color={item.color} />
                  <Text style={[styles.menuText, { color: item.color }]}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.row}>
            {menuItems.slice(2, 4).map((item) => {
              const IconComponent = iconMap[item.iconName];
              return (
                <TouchableOpacity 
                  key={item.id} 
                  style={[styles.menuButton, { backgroundColor: item.backgroundColor }]}
                  onPress={() => onMenuPress?.(item.id)}
                >
                  <IconComponent width={17} height={17} color={item.color} />
                  <Text style={[styles.menuText, { color: item.color }]}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
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
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    flexDirection: 'row',
    gap: spacing.sm,
  },
  cardSmall: {
    padding: spacing.sm,
  },
  profileSection: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  avatar: {
    width: 69,
    height: 69,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: colors.border,
  },
  name: {
    color: colors.textWhite,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.42,
  },
  menuSection: {
    flex: 1,
    gap: spacing.sm,
  },
  menuSectionSmall: {
    gap: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  menuButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.xs,
    borderRadius: borderRadius.md,
    minHeight: 40,
  },
  menuText: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    fontFamily: 'Inter',
    letterSpacing: -0.36,
    flexShrink: 1,
  },
});