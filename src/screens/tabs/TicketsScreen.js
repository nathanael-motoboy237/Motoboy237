import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AuthContext } from '../AuthContext'; // Adjust the path as needed

const TicketsScreen = ({ route }) => {
  const { bookings: newBookings = [] } = route.params || {};
  const { addNotification } = useContext(AuthContext);
  const [allBookings, setAllBookings] = useState([]);

  // Use useRef to persist notifiedBookings across renders
  const notifiedBookingsRef = useRef(new Set());

  useEffect(() => {
    if (newBookings.length === 0) return; // No need to proceed if there are no new bookings

    setAllBookings((prevBookings) => {
      const updatedBookings = [...prevBookings];

      newBookings.forEach((booking) => {
        if (!updatedBookings.some((b) => b.id === booking.id)) {
          updatedBookings.push(booking);

          if (!notifiedBookingsRef.current.has(booking.id)) {
            notifiedBookingsRef.current.add(booking.id);
            handleNewBooking(booking); // Call this outside of setState to avoid re-render issues
          }
        }
      });

      return updatedBookings;
    });
  }, [newBookings]);

  const handleNewBooking = (booking) => {
    const newNotification = {
      id: `${booking.id}-notification`,
      title: 'New Booking',
      message: `You have a new booking: ${booking.name}`,
      timestamp: new Date().toISOString(),
      icon: 'ticket-alt',
      color: '#FF9800',
      unread: true,
    };
    addNotification(newNotification);
  };

  const renderBooking = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Booking #{item.id}</Text>
      <Text style={styles.detail}>Name: {item.name}</Text>
      <Text style={styles.detail}>Phone: {item.phone}</Text>
      <Text style={styles.detail}>Email: {item.email}</Text>
      <Text style={styles.detail}>Departure: {item.departure}</Text>
      <Text style={styles.detail}>Arrival: {item.arrival}</Text>
      <Text style={styles.detail}>Date: {item.date}</Text>
      <Text style={styles.detail}>Seats: {item.seats}</Text>
      <Text style={styles.detail}>Price: {item.price}</Text>
      <Text style={styles.notifyButton} onPress={() => handleNewBooking(item)}>
        Notify Me
      </Text>
    </View>
  );

  if (allBookings.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No bookings available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Bookings</Text>
      <FlatList
        data={allBookings}
        renderItem={renderBooking}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
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
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A90E2',
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#D9534F', // Bootstrap danger color for error
  },
  notifyButton: {
    fontSize: 16,
    color: '#4A90E2',
    marginTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default TicketsScreen;
