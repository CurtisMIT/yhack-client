import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraPage from './src/CameraPage'

export default function App() {
  return (
    <CameraPage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
