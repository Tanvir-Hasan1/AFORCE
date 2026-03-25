import { moderateScale } from 'react-native-size-matters';
import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { COLORS } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { HeaderProgress } from '../../components/auth/profile-setup/HeaderProgress';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsScreen() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <HeaderProgress step={3} totalSteps={3} />
        
        {/* Graphic */}
        <View style={styles.graphicContainer}>
          <Animated.View style={[styles.circleOuter, { transform: [{ scale: scaleAnim }] }]}>
            <View style={styles.circleInner}>
              <Ionicons name="water" size={64} color={COLORS.primary} />
            </View>
          </Animated.View>
          <View style={styles.bellBadge}>
            <Ionicons name="notifications" size={20} color={COLORS.background} />
          </View>
        </View>

        <Text style={styles.title}>Stay hydrated with smart reminders</Text>
        <Text style={styles.subtitle}>We'll remind you when your hydration score drops.</Text>

        {/* Mock Notification */}
        <View style={styles.mockNotifBox}>
          <View style={styles.mockHeader}>
            <View style={styles.mockIconBox}>
              <Ionicons name="water-outline" size={18} color={COLORS.primary} />
            </View>
            <View>
              <Text style={styles.mockAppText}>AFORCE • NOW</Text>
              <Text style={styles.mockNotifTitle}>Hydration Alert</Text>
            </View>
          </View>
          <Text style={styles.mockNotifBody}>Your hydration score is dropping. Drink 25 Oz now.</Text>
          <View style={styles.mockActions}>
            <TouchableOpacity style={styles.mockSmallBtn}><Text style={styles.mockBtnText}>Log 25 Oz</Text></TouchableOpacity>
            <TouchableOpacity style={styles.mockSmallBtn}><Text style={styles.mockBtnText}>Remind later</Text></TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      <View style={styles.footer}>
        <Button title="Allow Notifications" onPress={() => router.push('/auth/plan-ready')} variant="primary" />
        <TouchableOpacity style={styles.skipBtn} onPress={() => router.push('/auth/plan-ready')}>
          <Text style={styles.skipText}>Maybe later</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: moderateScale(24), paddingBottom: moderateScale(40), alignItems: 'center' },
  graphicContainer: { marginVertical: moderateScale(40), width: moderateScale(200), height: moderateScale(200), alignItems: 'center', justifyContent: 'center' },
  circleOuter: { width: moderateScale(180), height: moderateScale(180), borderRadius: moderateScale(90), borderWidth: 2, borderColor: '#334400', alignItems: 'center', justifyContent: 'center' },
  circleInner: { width: moderateScale(140), height: moderateScale(140), borderRadius: moderateScale(70), borderWidth: 4, borderColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' },
  bellBadge: { position: 'absolute', top: moderateScale(10), right: moderateScale(10), width: moderateScale(40), height: moderateScale(40), borderRadius: moderateScale(20), backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' },
  
  title: { color: COLORS.text, fontSize: moderateScale(26), fontWeight: 'bold', textAlign: 'center', marginBottom: moderateScale(12) },
  subtitle: { color: COLORS.textDim, fontSize: moderateScale(15), textAlign: 'center', lineHeight: 22, paddingHorizontal: moderateScale(16), marginBottom: moderateScale(40) },
  
  mockNotifBox: { width: '100%', backgroundColor: '#1A1A1A', borderRadius: moderateScale(16), padding: moderateScale(16), borderWidth: 1, borderColor: '#2A2A2A' },
  mockHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(12) },
  mockIconBox: { width: moderateScale(36), height: moderateScale(36), borderRadius: moderateScale(8), backgroundColor: '#2B3300', alignItems: 'center', justifyContent: 'center', marginRight: moderateScale(12) },
  mockAppText: { color: COLORS.primary, fontSize: moderateScale(10), fontWeight: 'bold', letterSpacing: 1, marginBottom: moderateScale(2) },
  mockNotifTitle: { color: COLORS.text, fontSize: moderateScale(15), fontWeight: 'bold' },
  mockNotifBody: { color: '#AAA', fontSize: moderateScale(14), lineHeight: 20, marginBottom: moderateScale(16) },
  mockActions: { flexDirection: 'row', gap: moderateScale(12) },
  mockSmallBtn: { flex: 1, backgroundColor: '#2A2A2A', paddingVertical: moderateScale(12), borderRadius: moderateScale(8), alignItems: 'center' },
  mockBtnText: { color: '#CCC', fontSize: moderateScale(13), fontWeight: '600' },

  footer: { paddingHorizontal: moderateScale(24), paddingBottom: moderateScale(16), backgroundColor: COLORS.background },
  skipBtn: { alignItems: 'center', marginTop: moderateScale(8), marginBottom: moderateScale(8) },
  skipText: { color: COLORS.textDim, fontSize: moderateScale(14), fontWeight: '600' }
});
