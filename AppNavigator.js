import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from 'react-native-vector-icons';
import { AuthProvider, AuthContext } from './src/screens/AuthContext'; // Import context

import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import SettingsScreen from './src/screens/SettingsScreen';
import BookingScreen from './src/screens/tabs/BookingScreen';
import ProfileScreen from './src/screens/tabs/ProfileScreen';
import HomeScreen from './src/screens/tabs/HomeScreen';
import NotificationsScreen from './src/screens/tabs/Notifications';
import TicketsScreen from './src/screens/tabs/TicketsScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import TermsOfServiceScreen from './src/screens/TermsOfServiceScreen';

// Define your navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Tab Navigator
const AppTabs = () => {
  const { notificationCount } = useContext(AuthContext); // Access notification count from context

  return (
    <Tab.Navigator
    initialRouteName="Home" // Set "Home" as the initial route
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notifications') {
            iconName = 'bell';
          } else if (route.name === 'Booking') {
            iconName = 'calendar-alt';
          } else if (route.name === 'Tickets') {
            iconName = 'ticket-alt';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return (
            <FontAwesome5 name={iconName} size={size} color={color} />
          );
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarLabel: () => null, // This hides the label below the icon
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Tickets" component={TicketsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarBadge: notificationCount > 0 ? notificationCount : null, // Display badge only if count is greater than 0
          tabBarBadgeStyle: styles.tabBarBadgeStyle,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Define the Stack Navigator
const AppNavigator = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Auth Screens */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
            <Stack.Screen name="TOS" component={TermsOfServiceScreen} />

            {/* Main App Screens */}
            <Stack.Screen name="MainApp" component={AppTabs} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Vibrant, light blue color
  },
  tabBarStyle: {
    backgroundColor: '#4A90E2',
    height: 80, // Adjust height as needed
    borderRadius: 30,
    elevation: 10, // Adds shadow for a more modern look
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    paddingBottom: 10, // To align icons centrally
    paddingHorizontal: 10, // Add horizontal padding to adjust spacing
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  tabBarItemStyle: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarBadgeStyle: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 14,
  },
  badgeContainer: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default AppNavigator;
