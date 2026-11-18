import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '../context/AuthContext';
import { WardrobeProvider } from '../context/WardrobeContext';
import { colors } from '../styles/colors';

// Layout raiz: provê o estado de login (em memória) e define a pilha de telas.
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <WardrobeProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.background },
            }}
          />
        </WardrobeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
