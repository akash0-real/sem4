import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/homeScreen.tsx';
import AboutScreen from '../screens/aboutScreen.tsx';
import ProjectsScreen from '../screens/projectScreen.tsx';
import SkillsScreen from '../screens/skillScreen.tsx';
import ContactScreen from '../screens/contactScreen.tsx';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Projects: undefined;
  Skills: undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Skills" component={SkillsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
