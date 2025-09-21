import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Login from './src/screens/Login';
import Perfil from './src/screens/Perfil';
import Ativos from './src/screens/Ativos';
import Recomendacao from './src/screens/Recomendacao';
import { getToken } from './src/services/storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: '#0f172a' } 
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#111827' },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#0b1220', borderTopColor: '#1f2937' },
        tabBarActiveTintColor: '#22d3ee',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarIcon: ({ color, size }) => {
          const map: Record<string, keyof typeof Ionicons.glyphMap> = {
            'Perfil': 'person-circle',
            'Ativos': 'stats-chart',
            'Recomendação': 'bulb'
          };
          const name = map[route.name] ?? 'ellipse';
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Ativos" component={Ativos} />
      <Tab.Screen name="Recomendação" component={Recomendacao} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [initialRoute, setInitialRoute] = useState<'Login'|'Main'>('Login');

  useEffect(() => {
    (async () => {
      const t = await getToken();
      setInitialRoute(t ? 'Main' : 'Login');
    })();
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
