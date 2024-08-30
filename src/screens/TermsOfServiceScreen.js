import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TermsOfServiceScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms of Service</Text>

      <Text style={styles.sectionTitle}>Introduction</Text>
      <Text style={styles.text}>
        Welcome to our app! These Terms of Service (the "Terms") govern your use of our mobile application. By using the app, you agree to comply with and be bound by these Terms. Please read them carefully.
      </Text>

      <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
      <Text style={styles.text}>
        By accessing or using the app, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with these Terms, please do not use the app.
      </Text>

      <Text style={styles.sectionTitle}>2. Changes to Terms</Text>
      <Text style={styles.text}>
        We reserve the right to update or modify these Terms at any time. Any changes will be effective immediately upon posting to the app. Your continued use of the app constitutes your acceptance of any changes.
      </Text>

      <Text style={styles.sectionTitle}>3. User Responsibilities</Text>
      <Text style={styles.text}>
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
      </Text>

      <Text style={styles.sectionTitle}>4. Prohibited Activities</Text>
      <Text style={styles.text}>
        You agree not to engage in any of the following prohibited activities:
        {'\n'}• Using the app for any unlawful purpose.
        {'\n'}• Attempting to interfere with or disrupt the app's operation.
        {'\n'}• Transmitting or uploading any content that is harmful, defamatory, or otherwise objectionable.
      </Text>

      <Text style={styles.sectionTitle}>5. Intellectual Property</Text>
      <Text style={styles.text}>
        All content, features, and functionality on the app, including but not limited to text, graphics, logos, and software, are the exclusive property of the app and are protected by intellectual property laws.
      </Text>

      <Text style={styles.sectionTitle}>6. Disclaimers and Limitation of Liability</Text>
      <Text style={styles.text}>
        The app is provided "as is" and "as available" without any warranties of any kind. We do not warrant that the app will be uninterrupted or error-free. In no event shall we be liable for any damages arising out of the use of or inability to use the app.
      </Text>

      <Text style={styles.sectionTitle}>7. Termination</Text>
      <Text style={styles.text}>
        We may terminate or suspend your access to the app at any time, with or without cause, and with or without notice. Upon termination, all provisions of these Terms that by their nature should survive termination shall survive.
      </Text>

      <Text style={styles.sectionTitle}>8. Governing Law</Text>
      <Text style={styles.text}>
        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the app operates, without regard to its conflict of law principles.
      </Text>

      <Text style={styles.sectionTitle}>9. Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions or concerns about these Terms, please contact us at:
        {'\n'}• Email: support@example.com
        {'\n'}• Address: 1234 Example Street, City, Country
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 40
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default TermsOfServiceScreen;
