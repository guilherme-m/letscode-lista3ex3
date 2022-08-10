
import { StatusBar } from 'expo-status-bar';
import { PixelRatio, StyleSheet, View, Text } from 'react-native';

import { ThemedText} from './src/components/ThemedText';
import { useAppFonts } from './src/hooks/useAppFonts';

export default function App() {

  const [fontsLoaded] = useAppFonts()

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <ThemedText variant='title'>
        Densidade de pixel deste dispositivo
      </ThemedText>
      
      <ThemedText variant='body'>
        {handlePixelRatio(PixelRatio.get())}
      </ThemedText>
      

    </View>
  );
}

const handlePixelRatio = (ppi: number) => {

  const ppiString = ppi < 2 ? 'baixa' :
    ppi < 3 ? 'média' : 'alta'

  return `Resultado: ${ppiString} (${ppi})`
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96aff3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
