
import { StatusBar } from 'expo-status-bar';
import { PixelRatio, StyleSheet, View } from 'react-native';

import { CustomTypography } from './src/components/CustomTypography';
import { useAppFonts } from './src/hooks/useAppFonts';

export default function App() {

  const [fontsLoaded] = useAppFonts()

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <CustomTypography font='RobotoMono' weight='semibold'>
        Densidade de pixel deste dispositivo
      </CustomTypography>
      
      <CustomTypography font='Raleway' weight='regular'>
        {handlePixelRatio(PixelRatio.get())}
      </CustomTypography>

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
