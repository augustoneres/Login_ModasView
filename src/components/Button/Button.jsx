import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import styles from './Button.styles';

// Botão reutilizável. variant: 'primary' (branco) | 'light' (cinza) | 'outline'
export default function Button({
  title,
  onPress,
  variant = 'primary',
  icon,
  style,
  accessibilityLabel,
}) {
  const textColor = variant === 'primary' ? colors.onButton : colors.text;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        style,
      ]}
    >
      {icon ? <Ionicons name={icon} size={20} color={textColor} /> : null}
      <Text style={[styles.texto, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}
