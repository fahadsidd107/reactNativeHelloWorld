import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I am Muhammad Fahad Siddiqui and this is my First React Native App.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#e6e6ff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
