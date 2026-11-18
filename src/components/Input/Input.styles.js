import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export default StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.medium,
    color: colors.textMuted,
  },
  campo: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.background,
  },
  campoMultilinha: {
    alignItems: 'flex-start',
    paddingVertical: spacing.sm,
  },
  campoFocado: {
    borderColor: colors.accent,
  },
  campoErro: {
    borderColor: colors.error,
  },
  icone: {
    marginRight: 2,
  },
  separador: {
    width: 1,
    height: 24,
    backgroundColor: colors.border,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: fonts.size.md,
    color: colors.text,
  },
  inputMultilinha: {
    minHeight: 100,
  },
  botaoOlho: {
    marginLeft: 2,
  },
});
