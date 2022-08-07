import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { PixelRatio, StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';

import { Raleway_400Regular } from '@expo-google-fonts/raleway';

export default function App() {

  const handlePixelRatio = (ppi: number) => {

    let [fontsLoaded] = useFonts({
      'roboto-mono': require('./assets/RobotoMono_600SemiBold.ttf'),
      'raleway': Raleway_400Regular
    })

    if (!fontsLoaded) {
      return <AppLoading />
    }

    const ppiString = ppi < 2 ? 'baixa' :
      ppi < 3 ? 'média' : 'alta'

    return `Resultado: ${ppiString} (${ppi})`
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Densidade de pixel deste dispositivo
      </Text>

      <Text style={styles.descricao}>
        {handlePixelRatio(PixelRatio.get())}
      </Text>

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
  titulo: {
    fontFamily: 'roboto-mono',
    fontSize:25,
    textAlign: 'center'
    
  },
  descricao:{
    fontFamily: 'raleway',
    fontSize:20,
    textAlign: 'center'
  }
});
