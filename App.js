import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import McButtonV2 from './src/components/ButtonStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <McButtonV2 shape = "c-sm" theme = "light" >Increase</McButtonV2>
      <StatusBar style="auto" />
    </View>
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
