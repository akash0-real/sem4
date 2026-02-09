import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About Me</Text>

      <Text style={styles.text}>
        I'm a passionate mobile application developer focused on building
        scalable and user-friendly applications using React Native.
      </Text>

      <Text style={styles.subHeading}>Education</Text>
      <Text style={styles.text}>B.Tech in Computer Science</Text>

      <Text style={styles.subHeading}>Interests</Text>
      <Text style={styles.text}>
        • Mobile App Development{'\n'}• Cloud & DevOps{'\n'}• UI/UX Design{'\n'}
        • Problem Solving
      </Text>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
});
