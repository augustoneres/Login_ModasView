import { useMemo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import { useWardrobe } from '../../context/WardrobeContext';
import { categorias, iconesPorCategoria } from '../../config/categorias';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import styles from './Home.styles';

const filtros = ['Todas', ...categorias];

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export default function Home() {
  const router = useRouter();
  const { pecas } = useWardrobe();
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const termo = normalizar(busca.trim());

  const pecasFiltradas = useMemo(
    () =>
      pecas.filter((peca) => {
        const correspondeCategoria =
          categoriaAtiva === 'Todas' || peca.categoria === categoriaAtiva;
        const correspondeBusca = normalizar(
          `${peca.nome} ${peca.categoria} ${peca.cor} ${peca.descricao}`,
        ).includes(termo);
        return correspondeCategoria && correspondeBusca;
      }),
    [categoriaAtiva, pecas, termo],
  );

  return (
    <ScreenLayout titulo="Peças">
      <View style={styles.introducao}>
        <View style={styles.introducaoTexto}>
        <Text style={globalStyles.subtitulo} accessibilityRole="header">
          Seu guarda-roupa
        </Text>
        <Text style={globalStyles.textoPequeno}>
          Encontre uma peça ou explore suas categorias.
        </Text>
        </View>
        <Pressable
        onPress={() => router.navigate('/adicionar')}
        accessibilityRole="button"
        accessibilityLabel="Adicionar peça"
        style={styles.botaoAdicionar}
        >
        <Ionicons name="add" size={22} color={colors.onAccent} />
        </Pressable>
      </View>

      <View style={styles.busca}>
        <Ionicons name="search-outline" size={20} color={colors.textMuted} />
        <TextInput
          value={busca}
          onChangeText={setBusca}
          placeholder="Buscar peça, cor ou categoria..."
          placeholderTextColor={colors.textMuted}
          style={styles.campoBusca}
          accessibilityLabel="Buscar peças por nome, cor ou categoria"
          returnKeyType="search"
          autoCorrect={false}
        />
        {busca.length > 0 ? (
          <Pressable
            onPress={() => setBusca('')}
            accessibilityRole="button"
            accessibilityLabel="Limpar busca"
            hitSlop={8}
          >
            <Ionicons name="close-circle" size={20} color={colors.textMuted} />
          </Pressable>
        ) : null}
      </View>

      <View style={styles.filtros}>
        {filtros.map((filtro) => {
          const ativo = categoriaAtiva === filtro;
          return (
            <Pressable
              key={filtro}
              onPress={() => setCategoriaAtiva(filtro)}
              accessibilityRole="button"
              accessibilityState={{ selected: ativo }}
              style={[styles.filtro, ativo && styles.filtroAtivo]}
            >
              <Text style={[styles.filtroTexto, ativo && styles.filtroTextoAtivo]}>
                {filtro}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={globalStyles.textoPequeno} accessibilityLiveRegion="polite">
        {pecasFiltradas.length}{' '}
        {pecasFiltradas.length === 1 ? 'peça encontrada' : 'peças encontradas'}
      </Text>

      {pecasFiltradas.length ? (
        <View style={styles.lista}>
          {pecasFiltradas.map((peca) => (
            <View key={peca.id} style={styles.pecaCard}>
              <View style={styles.pecaIcone}>
                <Ionicons
                  name={iconesPorCategoria[peca.categoria] || 'shirt-outline'}
                  size={22}
                  color={colors.accent}
                />
              </View>
              <View style={styles.pecaInfo}>
                <Text style={styles.pecaNome}>{peca.nome}</Text>
                <Text style={styles.pecaDetalhe}>
                  {peca.categoria} · {peca.cor}
                </Text>
                {peca.descricao ? (
                  <Text style={globalStyles.textoPequeno}>{peca.descricao}</Text>
                ) : null}
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.vazio}>
          <Ionicons name="search-outline" size={28} color={colors.textMuted} />
          <Text style={styles.pecaNome}>Nenhuma peça encontrada</Text>
          <Text style={[globalStyles.textoPequeno, styles.vazioTexto]}>
            Tente outra busca ou adicione uma nova peça ao guarda-roupa.
          </Text>
        </View>
      )}
    </ScreenLayout>
  );
}
