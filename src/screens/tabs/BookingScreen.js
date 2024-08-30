import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, Modal, Button } from 'react-native';

const BookingScreen = ({ route, navigation }) => {
  const tripId = route?.params?.tripId || 'Not Available';

  const [tripDetails, setTripDetails] = useState({
    departure: 'Douala',
    arrival: 'Yaoundé',
    date: '2024-09-01',
    price: '5000 CFA',
    seatsAvailable: 10,
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleBooking = () => {
    if (!name || !phone || !email || !selectedPaymentMode) {
      Alert.alert('Error', 'Please fill in all the fields and select a payment mode.');
      return;
    }

    if (selectedSeats > tripDetails.seatsAvailable) {
      Alert.alert('Error', 'Not enough seats available.');
      return;
    }

    const bookingDetails = {
      id: Date.now(),
      name,
      phone,
      email,
      departure: tripDetails.departure,
      arrival: tripDetails.arrival,
      date: tripDetails.date,
      seats: selectedSeats,
      price: tripDetails.price,
      paymentMode: selectedPaymentMode,
    };

    navigation.navigate('Tickets', { bookings: [bookingDetails] });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Please enter your details:</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>Trip ID: {tripId}</Text>
        <Text style={styles.detail}>Departure: {tripDetails.departure}</Text>
        <Text style={styles.detail}>Arrival: {tripDetails.arrival}</Text>
        <Text style={styles.detail}>Date: {tripDetails.date}</Text>
        <Text style={styles.detail}>Price: {tripDetails.price}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Payment Mode Selection */}
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentLabel}>Select Payment Mode:</Text>
        {['Cash', 'Orange Money', 'MTN Money'].map((paymentMode) => (
          <TouchableOpacity
            key={paymentMode} // Ensure unique key for each option
            style={[
              styles.paymentOption,
              selectedPaymentMode === paymentMode && styles.selectedPaymentOption,
            ]}
            onPress={() => setSelectedPaymentMode(paymentMode)}
          >
            <Text style={styles.paymentOptionText}>{paymentMode}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Select Seats</Text>
      </TouchableOpacity>
      <Text style={styles.selectedSeats}>Selected Seats: {selectedSeats}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Number of Seats</Text>
            {[...Array(tripDetails.seatsAvailable)].map((_, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalButton}
                onPress={() => {
                  setSelectedSeats(index + 1);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalButtonText}>{index + 1}</Text>
              </TouchableOpacity>
            ))}
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#4A90E2',
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  paymentContainer: {
    marginBottom: 20,
  },
  paymentLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paymentOption: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
  },
  selectedPaymentOption: {
    borderColor: '#4A90E2',
    backgroundColor: '#E0F0FF',
  },
  paymentOptionText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  selectedSeats: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default BookingScreen;
