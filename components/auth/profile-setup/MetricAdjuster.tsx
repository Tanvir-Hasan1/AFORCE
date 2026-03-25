import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/theme';

interface MetricAdjusterProps {
  label: string;
  value: string;
  onDecrease: () => void;
  onIncrease: () => void;
  isCustomArrow?: boolean;
}

export function MetricAdjuster({ label, value, onDecrease, onIncrease, isCustomArrow }: MetricAdjusterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.circleBtn} onPress={onDecrease}>
          <Text style={styles.btnText}>{isCustomArrow ? '<' : '-'}</Text>
        </TouchableOpacity>
        <Text style={styles.valueText}>{value}</Text>
        <TouchableOpacity style={styles.circleBtn} onPress={onIncrease}>
          <Text style={styles.btnText}>{isCustomArrow ? '>' : '+'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    borderWidth: 1,
    borderColor: COLORS.border,
    flex: 1,
    minHeight: 110,
    justifyContent: 'space-between'
  },
  label: { color: COLORS.textDim, fontSize: moderateScale(11), fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: moderateScale(12) },
  circleBtn: { width: moderateScale(32), height: moderateScale(32), borderRadius: moderateScale(16), backgroundColor: '#1A1A1A', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#333' },
  btnText: { color: COLORS.primary, fontSize: moderateScale(16), fontWeight: '600' },
  valueText: { color: COLORS.text, fontSize: moderateScale(24), fontWeight: 'bold' }
});
