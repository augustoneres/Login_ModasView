import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button/Button';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import { categoriasBaseDoLook, iconesPorCategoria } from '../../config/categorias';
import { useWardrobe } from '../../context/WardrobeContext';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import styles from './Looks.styles';

function sortearLook(pecas) {
  const look = categoriasBaseDoLook.map((categoria) => {
    const opcoes = pecas.filter((peca) => peca.categoria === categoria);
    if (!opcoes.length) return null;

    return {
      categoria,
      peca: opcoes[Math.floor(Math.random() * opcoes.length)],
    };
  });

  if (look.some((item) => item === null)) return [];

  const acessorios = pecas.filter((peca) => peca.categoria === 'Acessório');
  if (acessorios.length && Math.random() < 0.6) {
    look.push({
      categoria: 'Acessório',
      peca: acessorios[Math.floor(Math.random() * acessorios.length)],
    });
  }

  return look;
}

export default function Looks() {
  const { pecas } = useWardrobe();
  const [numeroSorteio, setNumeroSorteio] = useState(0);
  const look = useMemo(() => sortearLook(pecas), [numeroSorteio, pecas]);

  return (
    <ScreenLayout titulo="Looks" mostrarVoltar>
      <View style={styles.introducao}>
        <View style={styles.destaqueIcone}>
          <Ionicons name="sparkles-outline" size={26} color={colors.accent} />
        </View>
        <Text style={globalStyles.subtitulo} accessibilityRole="header">
          Uma combinação para hoje
        </Text>
        <Text style={[globalStyles.textoPequeno, styles.centralizado]}>
          Cada sorteio escolhe peças aleatórias do seu guarda-roupa.
        </Text>
      </View>

      {look.length ? (
        <View style={styles.listaLook}>
          {look.map(({ categoria, peca }, indice) => (
            <View key={categoria} style={styles.itemLook}>
              <View style={styles.ordem}>
                <Text style={styles.numero}>{indice + 1}</Text>
              </View>
              <View style={styles.itemIcone}>
                <Ionicons
                  name={iconesPorCategoria[categoria] || 'shirt-outline'}
                  size={22}
                  color={colors.accent}
                />
              </View>
              <View style={styles.itemTexto}>
                <Text style={styles.categoria}>{categoria}</Text>
                <Text style={styles.nome}>{peca.nome}</Text>
                <Text style={globalStyles.textoPequeno}>{peca.cor}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.vazio}>
          <Ionicons name="shirt-outline" size={28} color={colors.textMuted} />
          <Text style={styles.nome}>Faltam peças para montar um look</Text>
          <Text style={[globalStyles.textoPequeno, styles.centralizado]}>
            Cadastre pelo menos uma peça de cima, uma de baixo e um calçado.
          </Text>
        </View>
      )}

      <Button
        title="Sortear outro look"
        icon="shuffle-outline"
        onPress={() => setNumeroSorteio((numero) => numero + 1)}
      />
      <Text style={[globalStyles.textoPequeno, styles.nota]}>
        O sorteio é aleatório. Adicionar peças novas atualiza as opções nesta sessão.
      </Text>
    </ScreenLayout>
  );
}
