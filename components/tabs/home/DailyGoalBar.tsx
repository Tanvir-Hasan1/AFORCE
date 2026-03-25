import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

export function DailyGoalBar() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Daily Goal</Text>
      <View style={styles.row}>
        <Text style={styles.value}>1.8<Text style={styles.unit}>oz</Text> <Text style={styles.total}>/ 2.7oz</Text></Text>
        <Text style={styles.percent}>66%</Text>
      </View>
      <View style={styles.barBg}>
        <View style={styles.barFill} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: COLORS.card, borderRadius: moderateScale(20), padding: moderateScale(20), marginBottom: moderateScale(16) },
  title: { color: COLORS.textDim, fontSize: moderateScale(11), fontWeight: '600', marginBottom: moderateScale(8) },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: moderateScale(16) },
  value: { color: COLORS.text, fontSize: moderateScale(24), fontWeight: 'bold' },
  unit: { fontSize: moderateScale(14) },
  total: { color: '#666', fontSize: moderateScale(14), fontWeight: '500' },
  percent: { color: COLORS.primary, fontSize: moderateScale(14), fontWeight: 'bold' },
  barBg: { height: moderateScale(8), backgroundColor: COLORS.border, borderRadius: moderateScale(4) },
  barFill: { height: moderateScale(8), backgroundColor: COLORS.primary, borderRadius: moderateScale(4), width: '66%' }
});
