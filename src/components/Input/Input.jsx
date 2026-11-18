import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/global';
import styles from './Input.styles';

// Campo de texto reutilizável: ícone, divisor, texto, check de preenchido e erro.
// Se secureTextEntry for true, exibe o botão Mostrar/Ocultar senha.
export default function Input({
  label,
  icon,
  error,
  preenchido = false,
  secureTextEntry = false,
  multiline = false,
  inputRef,
  ...rest
}) {
  const [focado, setFocado] = useState(false);
  const [oculta, setOculta] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View
        style={[
          styles.campo,
          multiline && styles.campoMultilinha,
          focado && styles.campoFocado,
          error ? styles.campoErro : null,
        ]}
      >
        {icon ? (
          <>
            <Ionicons name={icon} size={20} color={colors.textMuted} style={styles.icone} />
            <View style={styles.separador} />
          </>
        ) : null}

        <TextInput
          ref={inputRef}
          style={[styles.input, multiline && styles.inputMultilinha]}
          placeholderTextColor={colors.textMuted}
          secureTextEntry={oculta}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          accessibilityLabel={label}
          onFocus={() => setFocado(true)}
          onBlur={() => setFocado(false)}
          {...rest}
        />

        {preenchido && !error ? (
          <Ionicons name="checkmark-circle" size={20} color={colors.accent} />
        ) : null}

        {secureTextEntry ? (
          <Pressable
            onPress={() => setOculta((valor) => !valor)}
            accessibilityRole="button"
            accessibilityLabel={oculta ? 'Mostrar senha' : 'Ocultar senha'}
            hitSlop={8}
            style={styles.botaoOlho}
          >
            <Ionicons
              name={oculta ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color={colors.textMuted}
            />
          </Pressable>
        ) : null}
      </View>

      {error ? (
        <Text style={globalStyles.mensagemErro} accessibilityLiveRegion="polite">
          {error}
        </Text>
      ) : null}
    </View>
  );
}
