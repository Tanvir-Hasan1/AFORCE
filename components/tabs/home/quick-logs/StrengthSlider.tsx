import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet, TouchableOpacity, DimensionValue } from 'react-native';
import { COLORS } from '../../../../constants/theme';

interface StrengthSliderProps {
  level: 'low' | 'medium' | 'high';
  onChange: (val: 'low' | 'medium' | 'high') => void;
}

export function StrengthSlider({ level, onChange }: StrengthSliderProps) {
  const isLow = level === 'low';
  const isMed = level === 'medium';
  const isHigh = level === 'high';

  // Progress logic
  let progressWidth: DimensionValue = '0%';
  if (isMed) progressWidth = '50%';
  if (isHigh) progressWidth = '100%';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ELECTROLYTE STRENGTH</Text>
      
      <View style={styles.labelsRow}>
        <TouchableOpacity style={styles.labelTouch} onPress={() => onChange('low')}>
          <Text style={[styles.labelText, isLow && styles.labelActive]}>LOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.labelTouch} onPress={() => onChange('medium')}>
          <Text style={[styles.labelText, isMed && styles.labelActive]}>MEDIUM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.labelTouch} onPress={() => onChange('high')}>
          <Text style={[styles.labelText, isHigh && styles.labelActive]}>HIGH</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.trackBg}>
        <View style={[styles.trackFill, { width: progressWidth }]} />
        <View style={[styles.thumb, { left: progressWidth }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: moderateScale(32) },
  header: { color: COLORS.textDim, fontSize: moderateScale(10), fontWeight: 'bold', letterSpacing: 1.5, marginBottom: moderateScale(16) },
  labelsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: moderateScale(12), paddingHorizontal: moderateScale(4) },
  labelTouch: { padding: moderateScale(4) },
  labelText: { color: '#666', fontSize: moderateScale(10), fontWeight: 'bold' },
  labelActive: { color: COLORS.primary, shadowColor: COLORS.primary, shadowOpacity: 0.5, shadowRadius: 5 },
  trackBg: { height: moderateScale(6), backgroundColor: COLORS.border, borderRadius: moderateScale(3), position: 'relative' },
  trackFill: { height: moderateScale(6), backgroundColor: COLORS.primary, borderRadius: moderateScale(3), position: 'absolute', top: moderateScale(0), left: moderateScale(0) },
  thumb: { position: 'absolute', top: moderateScale(-3), width: moderateScale(12), height: moderateScale(12), borderRadius: moderateScale(6), backgroundColor: COLORS.text, marginLeft: moderateScale(-6) }
});
