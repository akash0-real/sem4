import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/images/profile.png')}
        style={styles.image}
      />
      <Text style={styles.name}>Akash Bisht</Text>
      <Text style={styles.tagline}>React Native Developer</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 14,
    color: 'gray',
  },
});
