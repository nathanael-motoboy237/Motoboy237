import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext'; // Update with the correct path

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { registeredUser } = useContext(AuthContext); // Access registered user details

  // Confirm logout and handle navigation
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          onPress: () => {
            // Perform logout operations if needed
            navigation.navigate('Login');
          }
        },
      ],
      { cancelable: true }
    );
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Name:</Text>
        <Text style={styles.detailValue}>{registeredUser?.name || 'N/A'}</Text>
        <Text style={styles.detailLabel}>Email:</Text>
        <Text style={styles.detailValue}>{registeredUser?.email || 'N/A'}</Text>
        <Text style={styles.detailLabel}>Phone:</Text>
        <Text style={styles.detailValue}>{registeredUser?.phone || 'N/A'}</Text>
        <Text style={styles.detailLabel}>Gender:</Text>
        <Text style={styles.detailValue}>{registeredUser?.gender || 'N/A'}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSettingsPress}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    alignItems: 'center',
  },
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 30,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#4A90E2',
    width: '100%',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ProfileScreen;
