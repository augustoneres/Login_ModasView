import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export default StyleSheet.create({
  introducao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  introducaoTexto: {
    flex: 1,
    gap: spacing.xs,
  },
  botaoAdicionar: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    backgroundColor: colors.accent,
  },
  busca: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
  },
  campoBusca: {
    flex: 1,
    paddingVertical: spacing.sm,
    fontSize: fonts.size.md,
    color: colors.text,
  },
  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  filtro: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
  },
  filtroAtivo: {
    borderColor: colors.accent,
    backgroundColor: colors.surfaceActive,
  },
  filtroTexto: {
    fontSize: fonts.size.xs,
    color: colors.textMuted,
  },
  filtroTextoAtivo: {
    color: colors.text,
    fontWeight: fonts.weight.bold,
  },
  lista: {
    gap: spacing.sm,
  },
  pecaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },
  pecaIcone: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    backgroundColor: colors.surfaceAlt,
  },
  pecaInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  pecaNome: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
    color: colors.text,
  },
  pecaDetalhe: {
    fontSize: fonts.size.sm,
    color: colors.accent,
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
  vazioTexto: {
    textAlign: 'center',
  },
});
