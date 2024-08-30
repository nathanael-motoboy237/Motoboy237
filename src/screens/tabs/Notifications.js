import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from 'react-native-vector-icons';
import { AuthContext } from '../AuthContext'; // Adjust the path as needed
import { formatDistanceToNow, parseISO } from 'date-fns';

const NotificationScreen = () => {
  const { notifications } = useContext(AuthContext);

  const markAsRead = (id) => {
    // Assuming you have a function to mark notifications as read
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity
      onPress={() => markAsRead(item.id)} // Mark notification as read on press
      style={[styles.notificationCard, { borderLeftColor: item.color }]}
    >
      <View style={styles.iconContainer}>
        <FontAwesome5 name={item.icon} size={24} color={item.color} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.notificationTitle, item.unread && styles.unreadTitle]}>
          {item.title}
        </Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTimestamp}>
          {formatDistanceToNow(parseISO(item.timestamp), { addSuffix: true })}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No notifications available.</Text>}
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
  listContainer: {
    paddingBottom: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  unreadTitle: {
    fontWeight: 'bold',
    color: '#000',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  notificationTimestamp: {
    fontSize: 14,
    color: '#999',
    textAlign: 'right',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
});

export default NotificationScreen;
