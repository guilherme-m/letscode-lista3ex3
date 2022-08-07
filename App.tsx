import { StatusBar } from 'expo-status-bar';
import { PixelRatio, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const handlePixelRatio = (ppi: number) => {
    
    const ppiString = ppi < 2 ? 'baixa' :
      ppi < 3 ? 'média' : 'alta'
    
    return `${ppiString} (${ppi})`
  }
  
  return (
    <View style={styles.container}>
      <Text>A densidade do seu dispositivo é {handlePixelRatio(PixelRatio.get())}</Text>
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
