import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export default StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.md,
  },
  // Cartão central com a borda superior em destaque.
  cartao: {
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
    gap: spacing.lg,
    padding: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderTopColor: colors.accentBorder,
    backgroundColor: colors.surface,
  },
  marca: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  cabecalho: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  tituloTela: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.text,
    textAlign: 'center',
  },
  descricaoApp: {
    textAlign: 'center',
    fontSize: fonts.size.sm,
    lineHeight: 20,
    color: colors.textMuted,
  },
  campos: {
    gap: spacing.md,
  },
  caixaErro: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.sm + 4,
    borderRadius: radius.md,
    backgroundColor: colors.errorBackground,
  },
  textoErro: {
    flex: 1,
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.medium,
    color: colors.error,
  },
  botoes: {
    gap: spacing.sm + 4,
  },
  divisorLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  divisorTexto: {
    fontSize: fonts.size.sm,
    color: colors.textMuted,
  },
  rodape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  textoRodape: {
    flexShrink: 1,
    textAlign: 'center',
    fontSize: fonts.size.xs,
    color: colors.textMuted,
  },
});
