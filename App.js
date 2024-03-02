import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Component1 from './components/component1';
import Style from './style/style.js'

export default function App() {
  return (
    <View style={Style.Text}>
     <Component1/>
    </View>
  );
};