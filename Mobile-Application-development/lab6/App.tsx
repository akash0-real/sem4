import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HotelScreen from './resources/Hotel';
import PaymentScreen from './resources/Payment';

export type RootStackParamList = {
  Hotel: undefined;
  Payment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Hotel"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Hotel" component={HotelScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
