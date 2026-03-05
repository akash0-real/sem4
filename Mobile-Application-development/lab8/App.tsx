import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* ---------- Types ---------- */

export type RootStackParamList = {
  Tabs: undefined;
  Profile: undefined;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

/* ---------- Navigators ---------- */

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

/* ---------- Bottom Tabs ---------- */

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 12, fontWeight: '700' }}>H</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 12, fontWeight: '700' }}>P</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/* ---------- Stack ---------- */

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

/* ---------- App ---------- */

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
