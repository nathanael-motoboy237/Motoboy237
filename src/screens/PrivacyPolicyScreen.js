import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>

      <Text style={styles.sectionTitle}>Introduction</Text>
      <Text style={styles.text}>
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this policy carefully.
      </Text>

      <Text style={styles.sectionTitle}>Information We Collect</Text>
      <Text style={styles.text}>
        We may collect information about you in a variety of ways. The information we may collect includes:
        {'\n'}• Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number.
        {'\n'}• Derivative Data: Information our servers automatically collect when you access the app, such as your IP address, your browser type, and your operating system.
      </Text>

      <Text style={styles.sectionTitle}>Use of Your Information</Text>
      <Text style={styles.text}>
        We may use information collected about you via the app to:
        {'\n'}• Assist law enforcement and respond to subpoenas.
        {'\n'}• Compile anonymous statistical data and analysis for use internally or with third parties.
        {'\n'}• Create and manage your account.
        {'\n'}• Deliver targeted advertising, newsletters, and other information regarding promotions and the app to you.
      </Text>

      <Text style={styles.sectionTitle}>Disclosure of Your Information</Text>
      <Text style={styles.text}>
        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        {'\n'}• By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
        {'\n'}• Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
      </Text>

      <Text style={styles.sectionTitle}>Security of Your Information</Text>
      <Text style={styles.text}>
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
      </Text>

      <Text style={styles.sectionTitle}>Policy for Children</Text>
      <Text style={styles.text}>
        We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
      </Text>

      <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
      <Text style={styles.text}>
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
      </Text>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={styles.text}>
        If you have questions or comments about this privacy policy, please contact us at:
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

export default PrivacyPolicyScreen;
