
import { useFonts } from 'expo-font';

import {
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold
} from '@expo-google-fonts/raleway';
import {
  RobotoMono_300Light,
  RobotoMono_400Regular,
  RobotoMono_600SemiBold,
  RobotoMono_700Bold
} from '@expo-google-fonts/roboto-mono';

export const useAppFonts = () => useFonts({
  'RobotoMono_light': RobotoMono_300Light,
  'RobotoMono_regular': RobotoMono_400Regular,
  'RobotoMono_semibold': RobotoMono_600SemiBold,
  'RobotoMono_bold': RobotoMono_700Bold,

  'Raleway_light': Raleway_300Light,
  'Raleway_regular': Raleway_400Regular,
  'Raleway_semibold': Raleway_600SemiBold,
  'Raleway_bold': Raleway_700Bold
})