import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SocialButton from '../components/socialButton';

const ContactScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Contact Me</Text>

      <Text style={styles.subText}>
        Feel free to connect with me through the platforms below.
      </Text>

      <View style={styles.buttonsContainer}>
        <SocialButton label="GitHub" url="https://github.com/akash0-real" />

        <SocialButton
          label="LinkedIn"
          url="https://linkedin.com/in/yourprofile"
        />

        <SocialButton label="Email" url="mailto:youremail@gmail.com" />
      </View>
    </ScrollView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
    color: '#555',
  },
  buttonsContainer: {
    width: '100%',
  },
});
