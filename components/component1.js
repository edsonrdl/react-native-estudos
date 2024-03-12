import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Component1() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Tecnologias programador</Text>
      <Text style={styles.textStyle}>Html</Text>
      <Text style={styles.textStyle}>CSS</Text>
      <Text style={styles.textStyle}>Javascript</Text>
      <Text style={styles.textStyle}>Amgular</Text>
      <Text style={styles.textStyle}>React</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopEndRadius:30,
    width:300,
    borderTopStartRadius:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#444',
  },
  titleStyle: {
    color: 'red',
    fontSize: 18,
  },
  textStyle: {
    color: 'yellow',
    fontSize: 14,
  },
});
