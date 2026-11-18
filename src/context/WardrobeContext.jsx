import { createContext, useContext, useMemo, useState } from 'react';
import pecasIniciais from '../data/pecas.json';

const WardrobeContext = createContext(null);

export function WardrobeProvider({ children }) {
  const [pecas, setPecas] = useState(pecasIniciais);

  function adicionarPeca(dados) {
    const novaPeca = {
      ...dados,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    };
    setPecas((atuais) => [...atuais, novaPeca]);
    return novaPeca;
  }

  const value = useMemo(() => ({ pecas, adicionarPeca }), [pecas]);

  return <WardrobeContext.Provider value={value}>{children}</WardrobeContext.Provider>;
}

export function useWardrobe() {
  const context = useContext(WardrobeContext);
  if (!context) {
    throw new Error('useWardrobe precisa ser usado dentro de <WardrobeProvider>.');
  }
  return context;
}
