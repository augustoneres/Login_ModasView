import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../../components/Button/Button';
import BrandLogo from '../../components/BrandLogo/BrandLogo';
import ScreenLayout from '../../components/ScreenLayout/ScreenLayout';
import { globalStyles } from '../../styles/global';
import styles from './Sobre.styles';

const pilares = [
  { titulo: 'Missão', texto: 'Ajudar você a organizar suas peças e combinar looks.' },
  { titulo: 'Visão', texto: 'Tornar a escolha do que vestir mais simples e criativa.' },
  { titulo: 'Valores', texto: 'Estilo pessoal, praticidade e criatividade.' },
];

const etiquetas = ['Moda e estilo', 'Looks aleatórios', 'Versão 1.0'];

export default function Sobre() {
  const router = useRouter();

  return (
    <ScreenLayout titulo="Sobre" mostrarVoltar>
      <View style={styles.apresentacao}>
        <BrandLogo />
        <Text style={globalStyles.textoPequeno}>
          Seu espaço para organizar roupas e experimentar combinações.
        </Text>
      </View>

      <Text style={globalStyles.texto}>
        O ModasView reúne suas peças em um catálogo pesquisável e cria sugestões de looks
        combinando itens do seu guarda-roupa.
      </Text>
      <Text style={globalStyles.texto}>
        A combinação é aleatória: a cada sorteio, o aplicativo escolhe uma peça de cima, uma
        peça de baixo e um calçado. Acessórios podem aparecer como complemento.
      </Text>

      <View style={styles.etiquetas}>
        {etiquetas.map((etiqueta) => (
          <View key={etiqueta} style={globalStyles.etiqueta}>
            <Text style={globalStyles.etiquetaTexto}>{etiqueta}</Text>
          </View>
        ))}
      </View>

      <View style={globalStyles.card}>
        {pilares.map((pilar, indice) => (
          <View key={pilar.titulo}>
            {indice > 0 ? <View style={globalStyles.divisor} /> : null}
            <Text style={styles.pilarTitulo}>{pilar.titulo}</Text>
            <Text style={globalStyles.texto}>{pilar.texto}</Text>
          </View>
        ))}
      </View>

      <Text style={globalStyles.textoPequeno}>
        Os itens iniciais são carregados de um arquivo JSON. Peças inseridas pelo formulário
        ficam na memória durante a sessão e não são salvas depois que o app é fechado.
      </Text>

      <Button
        title="Voltar para peças"
        icon="home-outline"
        onPress={() => router.navigate('/home')}
      />
    </ScreenLayout>
  );
}
