import { Image, Text, View } from 'react-native';
import styles from './BrandLogo.styles';

const logo = require('../../../assets/logo.png');

export default function BrandLogo({ compact = false }) {
  return (
    <View style={[styles.container, compact && styles.compact]} accessibilityLabel="Logo ModasView">
      <Image
        source={logo}
        style={[styles.simbolo, compact && styles.simboloCompact]}
        accessibilityLabel="Símbolo azul de uma camiseta"
      />
      {!compact ? <Text style={styles.nome}>ModasView</Text> : null}
    </View>
  );
}
