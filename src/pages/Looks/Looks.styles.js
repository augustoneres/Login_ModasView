import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export default StyleSheet.create({
  introducao: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
  },
  destaqueIcone: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceAlt,
  },
  centralizado: {
    textAlign: 'center',
  },
  listaLook: {
    gap: spacing.sm,
  },
  itemLook: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },
  ordem: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceActive,
  },
  numero: {
    fontSize: fonts.size.xs,
    fontWeight: fonts.weight.bold,
    color: colors.text,
  },
  itemIcone: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    backgroundColor: colors.surfaceAlt,
  },
  itemTexto: {
    flex: 1,
    gap: spacing.xs,
  },
  categoria: {
    fontSize: fonts.size.xs,
    fontWeight: fonts.weight.bold,
    color: colors.accent,
    textTransform: 'uppercase',
  },
  nome: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
    color: colors.text,
    textAlign: 'center',
  },
  vazio: {
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },
  nota: {
    textAlign: 'center',
  },
});
