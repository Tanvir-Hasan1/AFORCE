import { moderateScale } from 'react-native-size-matters';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Svg, { Circle } from 'react-native-svg';

export default function SuccessScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AFORCE Hydration</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Svg height="240" width="240" viewBox="0 0 240 240" style={styles.svgBackdrop}>
            <Circle cx="120" cy="120" r="100" stroke="#1A1A1A" strokeWidth="2" fill="none" />
            <Circle cx="120" cy="120" r="115" stroke={COLORS.card} strokeWidth="1" fill="none" />
          </Svg>
          <View style={styles.checkCircle}>
            <Ionicons name="checkmark" size={60} color={COLORS.background} />
          </View>
        </View>

        <Text style={styles.title}>AForce Bottle Logged</Text>
        <Text style={styles.statLine}>+12oz hydration</Text>
        <Text style={styles.statLine}>+5 Hydration Score</Text>

        <View style={styles.cardsRow}>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>DAILY TOTAL</Text>
            <Text style={styles.cardValue}>64 <Text style={styles.cardUnit}>oz</Text></Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardLabel}>GOAL</Text>
            <Text style={styles.cardValue}>128 <Text style={styles.cardUnit}>oz</Text></Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.doneBtn} onPress={() => router.replace('/(tabs)' as any)}>
          <Text style={styles.doneBtnText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: moderateScale(20), paddingVertical: moderateScale(16) },
  headerTitle: { color: COLORS.text, fontSize: moderateScale(16), fontWeight: 'bold' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: moderateScale(24) },
  iconContainer: { alignItems: 'center', justifyContent: 'center', marginBottom: moderateScale(32), width: moderateScale(240), height: moderateScale(240) },
  svgBackdrop: { position: 'absolute' },
  checkCircle: { width: moderateScale(120), height: moderateScale(120), borderRadius: moderateScale(60), backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', shadowColor: COLORS.primary, shadowOffset: { width: moderateScale(0), height: moderateScale(0) }, shadowOpacity: 0.4, shadowRadius: 30, elevation: 15 },
  title: { color: COLORS.text, fontSize: moderateScale(24), fontWeight: 'bold', marginBottom: moderateScale(16) },
  statLine: { color: COLORS.primary, fontSize: moderateScale(14), fontWeight: '600', marginBottom: moderateScale(8) },
  cardsRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: moderateScale(32), gap: moderateScale(16) },
  card: { flex: 1, backgroundColor: '#0C0D0E', borderRadius: moderateScale(16), paddingVertical: moderateScale(24), alignItems: 'center', borderWidth: 1, borderColor: '#1A1A1A' },
  cardLabel: { color: '#666', fontSize: moderateScale(11), fontWeight: 'bold', letterSpacing: 1.5, marginBottom: moderateScale(8) },
  cardValue: { color: COLORS.text, fontSize: moderateScale(24), fontWeight: 'bold' },
  cardUnit: { color: '#666', fontSize: moderateScale(14), fontWeight: '600' },
  footer: { padding: moderateScale(24) },
  doneBtn: { backgroundColor: COLORS.primary, borderRadius: moderateScale(12), paddingVertical: moderateScale(16), alignItems: 'center', justifyContent: 'center' },
  doneBtnText: { color: COLORS.background, fontSize: moderateScale(16), fontWeight: 'bold' }
});
