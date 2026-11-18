import { createContext, useContext, useMemo, useState } from 'react';

// Estado de login mantido SOMENTE em memória (sem localStorage, banco ou API).
// Ao fechar e abrir o app, o valor volta para "false" e a tela de Login aparece.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);

  const value = useMemo(
    () => ({
      logado,
      signIn: () => setLogado(true),
      signOut: () => setLogado(false),
    }),
    [logado]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth precisa ser usado dentro de <AuthProvider>.');
  }
  return context;
}
