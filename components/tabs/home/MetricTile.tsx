import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

interface MetricTileProps {
  title: string;
  value: string;
  unit?: string;
  type: 'progress' | 'text' | 'dot-text';
  progress?: number;
  bottomText?: string;
  bottomTextColor?: string;
  dotColor?: string;
}

export function MetricTile({ title, value, unit, type, progress = 0, bottomText, bottomTextColor, dotColor }: MetricTileProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.valueRow}>
        <Text style={styles.value}>{value}</Text>
        {unit && <Text style={styles.unit}> {unit}</Text>}
      </View>
      
      {type === 'progress' && (
        <View style={styles.barBg}>
          <View style={[styles.barFill, { width: `${progress}%` }]} />
        </View>
      )}

      {type === 'text' && (
        <Text style={[styles.bottomText, { color: bottomTextColor || COLORS.primary }]}>{bottomText}</Text>
      )}

      {type === 'dot-text' && (
        <View style={styles.dotRow}>
          <View style={[styles.dot, { backgroundColor: dotColor || '#00FF66' }]} />
          <Text style={styles.bottomText}>{bottomText}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: COLORS.card, borderRadius: moderateScale(20), padding: moderateScale(16), marginBottom: moderateScale(16), height: moderateScale(115), justifyContent: 'space-between' },
  title: { color: COLORS.textDim, fontSize: moderateScale(10), fontWeight: 'bold', letterSpacing: 1 },
  valueRow: { flexDirection: 'row', alignItems: 'baseline', marginVertical: moderateScale(8) },
  value: { color: COLORS.text, fontSize: moderateScale(24), fontWeight: 'bold' },
  unit: { color: '#666', fontSize: moderateScale(11), fontWeight: '600' },
  barBg: { height: moderateScale(4), backgroundColor: COLORS.border, borderRadius: moderateScale(2), marginTop: moderateScale(4) },
  barFill: { height: moderateScale(4), backgroundColor: COLORS.primary, borderRadius: moderateScale(2) },
  bottomText: { color: COLORS.textDim, fontSize: moderateScale(11), fontWeight: '600', marginTop: moderateScale(4) },
  dotRow: { flexDirection: 'row', alignItems: 'center', marginTop: moderateScale(4) },
  dot: { width: moderateScale(6), height: moderateScale(6), borderRadius: moderateScale(3), marginRight: moderateScale(6) }
});
