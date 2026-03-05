import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }: any) => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Home</Text>

      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default Home;
