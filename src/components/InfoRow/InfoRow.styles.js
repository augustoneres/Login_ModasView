import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export default StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.xs,
  },
  iconeBox: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    backgroundColor: colors.surfaceAlt,
  },
  textos: {
    flex: 1,
  },
  label: {
    fontSize: fonts.size.xs,
    color: colors.textMuted,
  },
  valor: {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.medium,
    color: colors.text,
  },
});
