import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { radius, spacing } from '../../styles/global';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  compact: {
    justifyContent: 'center',
  },
  simbolo: {
    width: 68,
    height: 68,
    borderRadius: radius.lg,
  },
  simboloCompact: {
    width: 38,
    height: 38,
    borderRadius: radius.md,
  },
  nome: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.text,
  },
});
