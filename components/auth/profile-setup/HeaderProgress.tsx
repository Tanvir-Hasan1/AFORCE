import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

interface HeaderProgressProps {
  step: number;
  totalSteps: number;
}

export function HeaderProgress({ step, totalSteps }: HeaderProgressProps) {
  const progressPercent = (step / totalSteps) * 100;
  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        <Text style={styles.title}>PROFILE SETUP</Text>
        <Text style={styles.stepText}>Step {step} of {totalSteps}</Text>
      </View>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${progressPercent}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: moderateScale(24), width: '100%' },
  textRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: moderateScale(12) },
  title: { color: COLORS.textDim, fontSize: moderateScale(12), fontWeight: '700', letterSpacing: 1 },
  stepText: { color: COLORS.primary, fontSize: moderateScale(12), fontWeight: '700' },
  barBackground: { height: moderateScale(4), backgroundColor: COLORS.border, borderRadius: moderateScale(2) },
  barFill: { height: moderateScale(4), backgroundColor: COLORS.primary, borderRadius: moderateScale(2) }
});
