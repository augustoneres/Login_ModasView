import { Pressable, Text, View } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BrandLogo from '../BrandLogo/BrandLogo';
import { useAuth } from '../../context/AuthContext';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import styles from './Toolbar.styles';

// Opções de navegação exibidas na Toolbar.
const itensMenu = [
  { rota: '/home', nome: 'Peças' },
  { rota: '/looks', nome: 'Looks' },
  { rota: '/adicionar', nome: 'Adicionar' },
  { rota: '/sobre', nome: 'Sobre' },
];

// Toolbar do app: marca, título da tela, menu principal e botão Sair.
export default function Toolbar({ titulo, mostrarVoltar = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const { signOut } = useAuth();

  function sair() {
    signOut();
    router.replace('/');
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <View style={globalStyles.content}>
        <View style={styles.linhaTopo}>
          {mostrarVoltar ? (
            <Pressable
              onPress={() => router.navigate('/home')}
              accessibilityRole="button"
              accessibilityLabel="Voltar para Home"
              hitSlop={8}
              style={styles.botaoIcone}
            >
              <Ionicons name="arrow-back" size={24} color={colors.text} />
            </Pressable>
          ) : (
            <BrandLogo compact />
          )}

          <Text style={styles.titulo} accessibilityRole="header" numberOfLines={1}>
            {titulo}
          </Text>

          <Pressable
            onPress={sair}
            accessibilityRole="button"
            accessibilityLabel="Sair"
            hitSlop={8}
            style={styles.botaoIcone}
          >
            <Ionicons name="log-out-outline" size={24} color={colors.text} />
          </Pressable>
        </View>

        <View style={styles.menu}>
          {itensMenu.map((item) => {
            const ativo = pathname === item.rota;
            return (
              <Pressable
                key={item.rota}
                onPress={() => router.navigate(item.rota)}
                accessibilityRole="button"
                accessibilityState={{ selected: ativo }}
                style={[styles.itemMenu, ativo && styles.itemMenuAtivo]}
              >
                <Text style={[styles.itemTexto, ativo && styles.itemTextoAtivo]}>{item.nome}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
