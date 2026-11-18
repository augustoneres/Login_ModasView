import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { spacing } from '../../styles/global';

export default StyleSheet.create({
  apresentacao: {
    alignItems: 'center',
    gap: spacing.md,
  },
  etiquetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  pilarTitulo: {
    marginBottom: 4,
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.bold,
    color: colors.accent,
  },
});
