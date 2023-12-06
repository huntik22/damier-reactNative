import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Etudiant3 from "./components/exoApp3";
// import Application6 from "./articles";
import Damier from './damier';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.p}>Bienvenue à vous!!! Prêt pour une partie?</Text>
      <StatusBar style="auto" />
      <Damier> </Damier>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',

  },
  p:{
    color:"red",
    marginBottom:25,
    fontSize:30,
    fontWeight:"bold"
  }
});
