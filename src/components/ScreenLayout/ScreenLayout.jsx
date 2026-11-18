import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toolbar from '../Toolbar/Toolbar';
import { globalStyles, spacing } from '../../styles/global';

// Estrutura comum das telas internas: Toolbar fixa no topo + conteúdo rolável.
export default function ScreenLayout({ titulo, mostrarVoltar = false, children }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={globalStyles.screen}>
      <StatusBar style="light" />
      <Toolbar titulo={titulo} mostrarVoltar={mostrarVoltar} />
      <ScrollView
        contentContainerStyle={[
          globalStyles.scroll,
          { paddingBottom: insets.bottom + spacing.lg },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={globalStyles.content}>{children}</View>
      </ScrollView>
    </View>
  );
}
