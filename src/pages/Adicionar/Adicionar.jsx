import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import { categorias } from '../../config/categorias';
import { useWardrobe } from '../../context/WardrobeContext';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import styles from './Adicionar.styles';

export default function Adicionar() {
  const router = useRouter();
  const { adicionarPeca } = useWardrobe();
  const [nome, setNome] = useState('');
  const [cor, setCor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  function salvarPeca() {
    setErro('');
    setSucesso('');

    if (!nome.trim() || !cor.trim() || !categoria) {
      setErro('Informe o nome, a cor e a categoria da peça.');
      return;
    }

    adicionarPeca({
      nome: nome.trim(),
      cor: cor.trim(),
      categoria,
      descricao: descricao.trim(),
    });
    setNome('');
    setCor('');
    setDescricao('');
    setCategoria('');
    setSucesso('Peça adicionada ao guarda-roupa desta sessão.');
  }

  return (
    <ScreenLayout titulo="Adicionar" mostrarVoltar>
      <View style={styles.introducao}>
        <Text style={globalStyles.subtitulo} accessibilityRole="header">
          Nova peça
        </Text>
        <Text style={globalStyles.textoPequeno}>
          Cadastre as roupas que poderão aparecer nas combinações aleatórias.
        </Text>
      </View>

      <View style={styles.formulario}>
        <Input
          label="Nome da peça"
          icon="shirt-outline"
          placeholder="Ex.: Jaqueta jeans"
          value={nome}
          onChangeText={setNome}
          autoCapitalize="sentences"
        />
        <Input
          label="Cor"
          icon="color-palette-outline"
          placeholder="Ex.: Azul"
          value={cor}
          onChangeText={setCor}
          autoCapitalize="sentences"
        />

        <View style={styles.grupo}>
          <Text style={styles.label}>Categoria</Text>
          <View style={styles.categorias}>
            {categorias.map((item) => {
              const selecionada = categoria === item;
              return (
                <Pressable
                  key={item}
                  onPress={() => setCategoria(item)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selecionada }}
                  style={[styles.categoria, selecionada && styles.categoriaSelecionada]}
                >
                  <Text
                    style={[
                      styles.categoriaTexto,
                      selecionada && styles.categoriaTextoSelecionada,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <Input
          label="Descrição (opcional)"
          icon="create-outline"
          placeholder="Detalhes da peça"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />

        {erro ? (
          <Text style={globalStyles.mensagemErro} accessibilityLiveRegion="polite">
            {erro}
          </Text>
        ) : null}
        {sucesso ? (
          <View style={styles.sucesso}>
            <Ionicons name="checkmark-circle-outline" size={20} color={colors.accent} />
            <Text style={globalStyles.mensagemSucesso} accessibilityLiveRegion="polite">
              {sucesso}
            </Text>
          </View>
        ) : null}

        <Button title="Adicionar peça" icon="add-circle-outline" onPress={salvarPeca} />
        {sucesso ? (
          <Button
            title="Ver guarda-roupa"
            icon="shirt-outline"
            variant="outline"
            onPress={() => router.navigate('/home')}
          />
        ) : null}
      </View>

      <Text style={[globalStyles.textoPequeno, styles.nota]}>
        O catálogo inicial vem de um arquivo JSON. Peças adicionadas pelo formulário ficam
        disponíveis até você fechar o aplicativo.
      </Text>
    </ScreenLayout>
  );
}
