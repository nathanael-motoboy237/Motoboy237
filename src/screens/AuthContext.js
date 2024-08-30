import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('registeredUser');
        const storedNotifications = await AsyncStorage.getItem('notifications');
        const storedNotificationCount = await AsyncStorage.getItem('notificationCount');

        if (storedUser) setRegisteredUser(JSON.parse(storedUser));
        if (storedNotifications) setNotifications(JSON.parse(storedNotifications));
        if (storedNotificationCount) setNotificationCount(parseInt(storedNotificationCount, 10));
      } catch (error) {
        console.error('Failed to load data from storage', error);
      }
    };

    loadStoredData();
  }, []);

  const saveUserData = useCallback(async () => {
    try {
      await AsyncStorage.setItem('registeredUser', JSON.stringify(registeredUser));
    } catch (error) {
      console.error('Failed to save user data to storage', error);
    }
  }, [registeredUser]);

  useEffect(() => {
    if (registeredUser) saveUserData();
  }, [registeredUser, saveUserData]);

  const saveNotifications = useCallback(async () => {
    try {
      await AsyncStorage.setItem('notifications', JSON.stringify(notifications));
      await AsyncStorage.setItem('notificationCount', notificationCount.toString());
    } catch (error) {
      console.error('Failed to save notifications to storage', error);
    }
  }, [notifications, notificationCount]);

  useEffect(() => {
    saveNotifications();
  }, [notifications, notificationCount, saveNotifications]);

  const addNotification = useCallback((newNotification) => {
    const notificationWithId = {
      id: Date.now().toString(),
      ...newNotification,
      unread: true,
      timestamp: new Date().toISOString(),
    };

    setNotifications((prevNotifications) => [notificationWithId, ...prevNotifications]);
    setNotificationCount((prevCount) => prevCount + 1);
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, unread: false } : notification
      )
    );
    setNotificationCount((prevCount) => Math.max(prevCount - 1, 0));
  }, []);

  const contextValue = useMemo(() => ({
    registeredUser,
    setRegisteredUser,
    notificationCount,
    notifications,
    addNotification,
    markNotificationAsRead,
  }), [registeredUser, notificationCount, notifications, addNotification, markNotificationAsRead]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
