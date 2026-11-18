import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import styles from './ShortcutCard.styles';

// Cartão de atalho usado na Home para acessar outras telas.
export default function ShortcutCard({ icon, title, description, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${title}. ${description}`}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.iconeBox}>
        <Ionicons name={icon} size={22} color={colors.accent} />
      </View>

      <View style={styles.textos}>
        <Text style={styles.titulo}>{title}</Text>
        <Text style={styles.descricao}>{description}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
    </Pressable>
  );
}
