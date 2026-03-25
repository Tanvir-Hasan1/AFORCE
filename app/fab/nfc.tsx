import { moderateScale } from 'react-native-size-matters';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Svg, { Circle } from 'react-native-svg';

export default function NFCScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Syncing AForce Hydration...</Text>
        <Text style={styles.subtext}>TAP TO LOG YOUR DRINK</Text>
      </View>

      <View style={styles.centerGraphic}>
        {/* Glow/Gradient rings */}
        <Svg height="300" width="300" viewBox="0 0 300 300" style={styles.svgRings}>
          <Circle cx="150" cy="150" r="100" stroke="#333" strokeWidth="1" fill="none" />
          <Circle cx="150" cy="150" r="140" stroke={COLORS.border} strokeWidth="1" fill="none" />
        </Svg>
        
        {/* Mock Can Image OR Icon */}
        <View style={styles.mockCan}>
          <Ionicons name="battery-charging" size={60} color={COLORS.primary} style={{ transform: [{ rotate: '-90deg' }] }} />
        </View>

        {/* Stats around the can */}
        <View style={[styles.statNode, { top: '30%', left: '10%' }]}>
          <Text style={styles.statLabel}>MOLECULAR</Text>
          <Text style={styles.statValue}>STABLE .04</Text>
        </View>
        <View style={[styles.statNode, { top: '60%', left: '10%' }]}>
          <Text style={styles.statLabel}>BIO-LINK</Text>
          <Text style={styles.statValue}>ACTIVE</Text>
        </View>
        <View style={[styles.statNode, { top: '30%', right: '10%', alignItems: 'flex-end' }]}>
          <Text style={styles.statLabel}>BATCH</Text>
          <Text style={styles.statValue}>#AF-772</Text>
        </View>
        <View style={[styles.statNode, { top: '60%', right: '10%', alignItems: 'flex-end' }]}>
          <Text style={styles.statLabel}>ORIGIN</Text>
          <Text style={styles.statValue}>VOLCANIC</Text>
        </View>
      </View>

      {/* BOTTOM SHEET */}
      <View style={styles.bottomSheet}>
        <View style={styles.sheetHandle} />
        
        <View style={styles.productRow}>
          <View style={styles.productImgBox}>
            <Ionicons name="cube-outline" size={40} color="#666" />
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Soursop Edge + Seamoss</Text>
            <Text style={styles.productSubTitle}>Mineral Infused • 355 oz</Text>
            <Text style={styles.productStats}>HYDRATION SCORE INCREASE +6</Text>
          </View>
        </View>

        <View style={styles.sheetActions}>
          <TouchableOpacity style={styles.logBtn} onPress={() => router.replace('/log/success' as any)}>
            <Ionicons name="add-circle-outline" size={20} color={COLORS.background} style={{ marginRight: 8 }} />
            <Text style={styles.logBtnText}>Log Intake</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoBtn}>
            <Ionicons name="information-circle-outline" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050700', justifyContent: 'space-between' },
  header: { alignItems: 'center', marginTop: moderateScale(60) },
  title: { color: COLORS.text, fontSize: moderateScale(20), fontWeight: 'bold' },
  subtext: { color: COLORS.primary, fontSize: moderateScale(11), fontWeight: 'bold', letterSpacing: 2, marginTop: moderateScale(8) },
  centerGraphic: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  svgRings: { position: 'absolute' },
  mockCan: { width: moderateScale(80), height: moderateScale(200), backgroundColor: COLORS.card, borderRadius: moderateScale(16), borderWidth: 2, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center', shadowColor: COLORS.primary, shadowOffset: { width: moderateScale(0), height: moderateScale(0) }, shadowOpacity: 0.3, shadowRadius: 30, elevation: 10 },
  statNode: { position: 'absolute' },
  statLabel: { color: '#444', fontSize: moderateScale(9), letterSpacing: 1 },
  statValue: { color: '#666', fontSize: moderateScale(10), fontWeight: '600' },
  bottomSheet: { width: '100%', backgroundColor: COLORS.card, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: moderateScale(24), zIndex: 20 },
  sheetHandle: { width: moderateScale(40), height: moderateScale(4), backgroundColor: '#333', borderRadius: moderateScale(2), alignSelf: 'center', marginBottom: moderateScale(24) },
  productRow: { flexDirection: 'row', marginBottom: moderateScale(24) },
  productImgBox: { width: moderateScale(60), height: moderateScale(60), borderRadius: moderateScale(12), backgroundColor: COLORS.text, alignItems: 'center', justifyContent: 'center', marginRight: moderateScale(16) },
  productInfo: { flex: 1, justifyContent: 'center' },
  productTitle: { color: COLORS.text, fontSize: moderateScale(16), fontWeight: 'bold', marginBottom: moderateScale(4) },
  productSubTitle: { color: COLORS.textDim, fontSize: moderateScale(12), marginBottom: moderateScale(10) },
  productStats: { color: COLORS.primary, fontSize: moderateScale(10), fontWeight: 'bold', letterSpacing: 1, textShadowColor: 'rgba(212, 255, 0, 0.4)', textShadowOffset: { width: moderateScale(0), height: moderateScale(0) }, textShadowRadius: 8 },
  sheetActions: { flexDirection: 'row', gap: moderateScale(14) },
  logBtn: { flex: 1, backgroundColor: COLORS.primary, borderRadius: moderateScale(12), height: moderateScale(56), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  logBtnText: { color: COLORS.background, fontSize: moderateScale(16), fontWeight: 'bold' },
  infoBtn: { width: moderateScale(56), height: moderateScale(56), borderRadius: moderateScale(12), backgroundColor: COLORS.border, alignItems: 'center', justifyContent: 'center' }
});
