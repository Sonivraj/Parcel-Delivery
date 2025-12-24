export const colors = {
  // Primary colors
  primary: '#9BFE03',
  primaryDark: '#3B3F34',
  
  // Background colors
  background: '#121212',
  cardBackground: '#202020',
  inputBackground: '#1A1A1A',
  
  // Text colors
  textPrimary: '#EEEEEE',
  textSecondary: '#909090',
  textWhite: '#FFFFFF',
  textDark: '#3B3F34',
  
  // Button colors
  buttonYellow: '#FCD053',
  buttonYellowBg: '#322708',
  buttonGreen: '#9BFE03',
  buttonGreenBg: '#3B3F34',
  buttonBlue: '#2EB4FC',
  buttonBlueBg: '#124966',
  buttonPink: '#F6A3BB',
  buttonPinkBg: '#5D0A22',
  
  // Border colors
  border: '#909090',
  borderLight: '#2A2A2A',
  
  // Dot indicator
  dotGray: '#212121',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 16,
  lg: 24,
  full: 9999,
};

export const fontSizes = {
  xs: 9,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
};

export const fontWeights = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
};