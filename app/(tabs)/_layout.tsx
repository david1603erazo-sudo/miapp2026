import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors.light.card,
          borderTopColor: Colors.light.gradient1,
          borderTopWidth: 2,
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="detalle"
        options={{
          title: 'Gráficas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-line" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="configuracion"
        options={{
          title: 'Ventas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="video" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="galeria"
        options={{
          title: 'Galería',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image-multiple" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}