import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import styles from './InfoRow.styles';

// Linha de informação com ícone, rótulo e valor (usada em Contato).
export default function InfoRow({ icon, label, value }) {
  return (
    <View style={styles.linha} accessible accessibilityLabel={`${label}: ${value}`}>
      <View style={styles.iconeBox}>
        <Ionicons name={icon} size={20} color={colors.accent} />
      </View>
      <View style={styles.textos}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.valor}>{value}</Text>
      </View>
    </View>
  );
}
