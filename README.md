# StaySafe - Package Delivery & Tracking App 📦

A modern, sleek React Native mobile application for package delivery booking and real-time tracking. Built with Expo and featuring a beautiful dark-themed UI.

> 🚀 **Built in just 1 hour!** This project demonstrates rapid prototyping and development with React Native and Expo.

## ✨ Features

- **📍 Real-time Package Tracking** - Track your parcels with live location updates
- **📦 Easy Booking Flow** - Intuitive multi-step booking process for deliveries
- **🗺️ Interactive Maps** - Visual representation of pickup and delivery locations
- **👤 User Profile Management** - Personalized user experience with profile customization
- **⚙️ Settings & Preferences** - Manage notifications, privacy, and app settings
- **🎨 Modern Dark UI** - Eye-friendly dark theme with neon accent colors
- **📱 Responsive Design** - Adapts to different screen sizes seamlessly

## 🛠️ Tech Stack

- **Framework:** React Native with Expo (~54.0)
- **Language:** TypeScript (~5.9)
- **Navigation:** React Navigation v7 (Native Stack)
- **UI Components:** Custom-built components with React Native
- **Icons & Graphics:** React Native SVG
- **Fonts:** Inter font family (Google Fonts)
- **State Management:** React Hooks
- **Styling:** StyleSheet API with custom theme system

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device (for testing)

## 🚀 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd CodGo
```

2. **Install dependencies**
```bash
cd StaySafe
npm install
```

3. **Start the development server**
```bash
npm start
```

## 📱 Running the App

### On Physical Device
1. Install Expo Go from App Store (iOS) or Play Store (Android)
2. Scan the QR code shown in terminal/browser
3. The app will open in Expo Go

### On iOS Simulator
```bash
npm run ios
```

### On Android Emulator
```bash
npm run android
```

### On Web Browser
```bash
npm run web
```

## 📁 Project Structure

```
StaySafe/
├── assets/               # Images, icons, and static assets
│   ├── icons/           # SVG icons (battery, wifi, location, etc.)
│   ├── images/          # SVG and PNG images
│   └── ...
├── components/          # Reusable UI components
│   ├── TrackingCard.tsx
│   ├── ProfileHeader.tsx
│   ├── SearchBar.tsx
│   ├── BannerCard.tsx
│   ├── MenuGrid.tsx
│   └── ...
├── screens/             # Screen components
│   ├── HomeScreen.tsx
│   ├── BookingScreen.tsx
│   ├── InformationScreen.tsx
│   ├── ConfirmationScreen.tsx
│   └── SettingsScreen.tsx
├── constants/           # App constants and configurations
│   ├── theme.ts        # Colors, spacing, typography
│   └── mockData.ts     # Mock data for development
├── App.tsx              # Main app component
├── app.json             # Expo configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Key Components

### Screens
- **HomeScreen** - Main dashboard with profile, search, menu grid, and tracking card
- **BookingScreen** - Multi-step booking flow for package delivery
- **InformationScreen** - Additional information input during booking
- **ConfirmationScreen** - Order confirmation and summary
- **SettingsScreen** - App settings and preferences

### Reusable Components
- **TrackingCard** - Real-time package tracking display with map
- **ProfileHeader** - User profile with stats and notifications
- **SearchBar** - Search functionality with icon
- **BannerCard** - Promotional banner with gradient background
- **MenuGrid** - Grid layout for navigation options
- **StatCard** - Display statistics with icons
- **FormInput** - Custom input fields
- **StepIndicator** - Multi-step progress indicator

## 🎨 Design System

The app uses a custom design system with:

- **Color Palette:** Dark theme with neon green accent (#9BFE03)
- **Typography:** Inter font family (400, 500, 600, 700 weights)
- **Spacing:** Consistent spacing scale (4, 8, 16, 24, 40, 48px)
- **Border Radius:** Rounded corners (8, 16, 24px)
- **Shadows:** Custom elevation for cards and components

## 📦 Available Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android device/emulator
npm run ios        # Run on iOS device/simulator
npm run web        # Run on web browser
```

## 🔧 Configuration

### App Configuration (`app.json`)
- App name: StaySafe
- Version: 1.0.0
- Orientation: Portrait
- New Architecture: Enabled
- Edge-to-edge mode: Enabled (Android)

### SVG Support
The project uses `react-native-svg-transformer` for importing SVG files as React components with proper TypeScript support.

## 🌟 Features in Detail

### Package Tracking
- View tracking ID and current status
- See pickup and delivery locations
- Estimated delivery time
- Visual map representation

### Booking Flow
1. Select delivery type (food, packages, etc.)
2. Choose package dimensions
3. Set pickup and delivery locations
4. Select delivery time
5. Provide additional information
6. Confirm and place order

### Settings
- Edit profile
- Notifications management
- Privacy settings
- Language preferences
- Support and help
- App information

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ in just 1 hour as a rapid prototyping challenge.

## 🐛 Known Issues

- This is a prototype/demo version
- Some features are placeholder implementations
- Real API integration needed for production use

## 🔮 Future Enhancements

- [ ] Real-time location tracking with GPS
- [ ] Push notifications for delivery updates
- [ ] Payment gateway integration
- [ ] Order history
- [ ] Multiple language support
- [ ] Dark/Light theme toggle
- [ ] In-app chat with delivery personnel

## 📞 Support

For issues and questions, please open an issue on the GitHub repository.

---

**Note:** This project was created as a rapid development challenge to demonstrate the power of React Native and Expo for building beautiful mobile applications quickly.
