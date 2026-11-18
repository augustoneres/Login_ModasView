import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../styles/colors';

// A Home é a tela inicial da área logada.
export const unstable_settings = {
  anchor: 'home',
};

// Área interna do app (peças, looks aleatórios, cadastro e Sobre).
// Sem login válido, o usuário é enviado de volta para a tela de Login.
export default function AppLayout() {
  const { logado } = useAuth();

  if (!logado) {
    return <Redirect href="/" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  );
}
