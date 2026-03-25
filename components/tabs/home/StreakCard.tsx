import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export function StreakCard() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const activeDays = 3;

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>7 DAY STREAK</Text>
        <Text style={styles.streakCount}>🔥 12 Days</Text>
      </View>
      <View style={styles.daysRow}>
        {days.map((day, i) => (
          <View key={i} style={styles.dayCol}>
            <View style={[styles.circle, i < activeDays && styles.circleActive]}>
              {i < activeDays && <Ionicons name="checkmark" size={16} color={COLORS.background} />}
            </View>
            <Text style={styles.dayLabel}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: COLORS.card, borderRadius: moderateScale(20), padding: moderateScale(20), marginBottom: moderateScale(16) },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: moderateScale(20) },
  title: { color: COLORS.textDim, fontSize: moderateScale(11), fontWeight: 'bold', letterSpacing: 1.5 },
  streakCount: { color: COLORS.primary, fontSize: moderateScale(12), fontWeight: 'bold' },
  daysRow: { flexDirection: 'row', justifyContent: 'space-between' },
  dayCol: { alignItems: 'center', gap: moderateScale(10) },
  circle: { width: moderateScale(32), height: moderateScale(32), borderRadius: moderateScale(16), backgroundColor: '#1A1A1A', alignItems: 'center', justifyContent: 'center' },
  circleActive: { backgroundColor: COLORS.primary },
  dayLabel: { color: '#666', fontSize: moderateScale(11), fontWeight: 'bold' }
});
