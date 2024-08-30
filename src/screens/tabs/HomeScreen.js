import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome for car icon

// Sample data - replace this with your data fetching logic
const sampleTrips = [
  {
    id: '1',
    departure: 'Douala',
    arrival: 'Yaoundé',
    date: '2024-09-01',
    price: '5000 CFA',
    seats: 10,
    carDescription: 'Comfortable sedan with air conditioning.',
    carType: 'Sedan',
    carMake: 'Toyota',
    carRegistration: 'ABC-1234',
  },
  {
    id: '2',
    departure: 'Yaoundé',
    arrival: 'Bamenda',
    date: '2024-09-05',
    price: '6000 CFA',
    seats: 8,
    carDescription: 'Spacious SUV perfect for families.',
    carType: 'SUV',
    carMake: 'Honda',
    carRegistration: 'XYZ-5678',
  },
  {
    id: '3',
    departure: 'Bafoussam',
    arrival: 'Douala',
    date: '2024-09-10',
    price: '5500 CFA',
    seats: 5,
    carDescription: 'Compact car for city driving.',
    carType: 'Compact',
    carMake: 'Ford',
    carRegistration: 'LMN-9101',
  },
];

const HomeScreen = ({ navigation }) => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        // Simulating data fetch
        setTimeout(() => {
          setTrips(sampleTrips);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError('Failed to load trips');
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const filteredTrips = trips.filter(trip =>
    trip.departure.toLowerCase().includes(search.toLowerCase()) ||
    trip.arrival.toLowerCase().includes(search.toLowerCase())
  );

  const renderTrip = ({ item }) => (
    <View style={styles.tripContainer}>
      <Icon name="car" size={30} color="#FF5722" style={styles.carIcon} />
      <Text style={styles.tripTitle}>{item.departure} to {item.arrival}</Text>
      <Text style={styles.tripDetails}>Date: {item.date}</Text>
      <Text style={styles.tripDetails}>Price: {item.price}</Text>
      <Text style={styles.tripDetails}>Seats Available: {item.seats}</Text>
      <Text style={styles.tripDetails}>Car Type: {item.carType}</Text>
      <Text style={styles.tripDetails}>Car Make: {item.carMake}</Text>
      <Text style={styles.tripDetails}>Registration: {item.carRegistration}</Text>
      <Text style={styles.tripDescription}>{item.carDescription}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Booking', { tripId: item.id })}
        activeOpacity={0.7} // Changes opacity when pressed
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FF5722" />
        <Text style={styles.loadingText}>Loading trips...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search by departure or arrival..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchInput}
      />
      <FlatList
        data={filteredTrips}
        renderItem={renderTrip}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  searchBar: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  searchInput: {
    backgroundColor: '#dbe8f5',
    borderRadius: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  tripContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#4A90E2',
  },
  carIcon: {
    alignSelf: 'center',
    marginBottom: 10,
    color: 'orange',
  },
  tripTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  tripDetails: {
    fontSize: 16,
    color: '#555',
    marginVertical: 2,
    textAlign: 'center',
  },
  tripDescription: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
    borderWidth: 2,           // Adds a border
    borderColor: '#4A90E2',   // Light blue border color
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#FF5722',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#D32F2F',
  },
});

export default HomeScreen;