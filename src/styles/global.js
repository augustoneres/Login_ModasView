import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';

// Espaçamentos e arredondamentos reutilizados em todos os componentes.
export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };
export const radius = { sm: 8, md: 12, lg: 20, pill: 999 };

// Estilos globais: títulos, textos, containers, mensagens e destaques.
export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flexGrow: 1,
    padding: spacing.md,
  },
  // Limita a largura em telas grandes (tablet / navegador).
  content: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    gap: spacing.md,
  },

  titulo: {
    fontSize: fonts.size.xxl,
    fontWeight: fonts.weight.bold,
    color: colors.text,
  },
  subtitulo: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
    color: colors.text,
  },
  texto: {
    fontSize: fonts.size.md,
    lineHeight: 23,
    color: colors.textMuted,
  },
  textoPequeno: {
    fontSize: fonts.size.sm,
    lineHeight: 20,
    color: colors.textMuted,
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  divisor: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.sm,
  },

  mensagemErro: {
    fontSize: fonts.size.sm,
    color: colors.error,
  },
  mensagemSucesso: {
    fontSize: fonts.size.sm,
    color: colors.accent,
  },

  etiqueta: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceAlt,
  },
  etiquetaTexto: {
    fontSize: fonts.size.xs,
    fontWeight: fonts.weight.medium,
    color: colors.text,
  },
});
