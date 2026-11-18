import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export default StyleSheet.create({
  introducao: {
    gap: spacing.xs,
  },
  formulario: {
    gap: spacing.md,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },
  grupo: {
    gap: spacing.sm,
  },
  label: {
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.medium,
    color: colors.textMuted,
  },
  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  categoria: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    backgroundColor: colors.background,
  },
  categoriaSelecionada: {
    borderColor: colors.accent,
    backgroundColor: colors.surfaceActive,
  },
  categoriaTexto: {
    fontSize: fonts.size.xs,
    color: colors.textMuted,
  },
  categoriaTextoSelecionada: {
    color: colors.text,
    fontWeight: fonts.weight.bold,
  },
  sucesso: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  nota: {
    textAlign: 'center',
  },
});
