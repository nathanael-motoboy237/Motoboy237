import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Example icon library

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(prevState => !prevState);
  const toggleDarkMode = () => setIsDarkModeEnabled(prevState => !prevState);

  const handlePrivacyPolicyPress = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const handleTermsOfServicePress = () => {
    navigation.navigate('TOF');
  };

  const handleDeleteAccountPress = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => Alert.alert('Account deleted successfully.') },
      ]
    );
  };

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkModeEnabled && styles.darkContainer]}>
      <Text style={[styles.title, isDarkModeEnabled && styles.darkTitle]}>Settings</Text>

      <View style={[styles.settingItem, isDarkModeEnabled && styles.darkSettingItem]}>
        <View style={styles.settingIconText}>
          <Icon name="bell" size={24} color={isDarkModeEnabled ? '#FFFFFF' : '#4A90E2'} style={styles.settingIcon} />
          <Text style={[styles.settingText, isDarkModeEnabled && styles.darkSettingText]}>Enable Notifications</Text>
        </View>
        <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={[styles.settingItem, isDarkModeEnabled && styles.darkSettingItem]}>
        <View style={styles.settingIconText}>
          <Icon name="moon-o" size={24} color={isDarkModeEnabled ? '#FFFFFF' : '#4A90E2'} style={styles.settingIcon} />
          <Text style={[styles.settingText, isDarkModeEnabled && styles.darkSettingText]}>Dark Mode</Text>
        </View>
        <Switch value={isDarkModeEnabled} onValueChange={toggleDarkMode} />
      </View>

      <TouchableOpacity style={[styles.linkButton, isDarkModeEnabled && styles.darkLinkButton]} onPress={handlePrivacyPolicyPress}>
        <View style={styles.settingIconText}>
          <Icon name="lock" size={24} color={isDarkModeEnabled ? '#FFFFFF' : '#4A90E2'} style={styles.settingIcon} />
          <Text style={[styles.linkText, isDarkModeEnabled && styles.darkLinkText]}>Privacy Policy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.linkButton, isDarkModeEnabled && styles.darkLinkButton]} onPress={handleTermsOfServicePress}>
        <View style={styles.settingIconText}>
          <Icon name="file-text-o" size={24} color={isDarkModeEnabled ? '#FFFFFF' : '#4A90E2'} style={styles.settingIcon} />
          <Text style={[styles.linkText, isDarkModeEnabled && styles.darkLinkText]}>Terms of Service</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.linkButton, styles.dangerButton, isDarkModeEnabled && styles.darkDangerButton]} onPress={handleDeleteAccountPress}>
        <View style={styles.settingIconText}>
          <Icon name="trash" size={24} color="red" style={styles.settingIcon} />
          <Text style={[styles.linkText, isDarkModeEnabled && styles.darkLinkText, { color: 'red' }]}>Delete Account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Icon name="home" size={24} color="#FFFFFF" />
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    marginTop: 40,
  },
  darkTitle: {
    color: '#FFFFFF',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  darkSettingItem: {
    backgroundColor: '#2C2C2C',
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
  darkSettingText: {
    color: '#FFFFFF',
  },
  settingIconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 10,
  },
  linkButton: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  darkLinkButton: {
    backgroundColor: '#2C2C2C',
  },
  linkText: {
    fontSize: 18,
    color: '#4A90E2',
  },
  darkLinkText: {
    color: '#FFFFFF',
  },
  dangerButton: {
    backgroundColor: '#FFEBEB',
  },
  darkDangerButton: {
    backgroundColor: '#4A0D0D',
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  homeButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 10,
  },
});

export default SettingsScreen;
