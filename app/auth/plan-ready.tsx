import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import { Button } from '../../components/Button';

export default function PlanReadyScreen() {
  const router = useRouter();
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>Your hydration{'\n'}plan is ready</Text>

        {/* Circular Metric */}
        <View style={styles.metricCard}>
          <View style={{ width: 220, height: 220, alignItems: 'center', justifyContent: 'center' }}>
            {/* Animated Rotating Ring */}
            <Animated.View style={[StyleSheet.absoluteFill, { transform: [{ rotate: spin }] }]}>
              <Svg width="220" height="220" viewBox="0 0 220 220">
                {/* Background Ring */}
                <Circle cx="110" cy="110" r="100" stroke="#1A1C0A" strokeWidth="8" fill="transparent" />
                {/* 4 Segment Dashed Ring */}
                <Circle cx="110" cy="110" r="100" stroke={COLORS.primary} strokeWidth="8" fill="transparent" strokeDasharray="90, 67.079" strokeLinecap="round" />
              </Svg>
            </Animated.View>

            <View style={styles.circleInner}>
              <Text style={styles.metricValue}>2.7<Text style={styles.metricUnit}>oz</Text></Text>
              <Text style={styles.metricLabel}>DAILY GOAL</Text>
            </View>
          </View>
        </View>

        {/* Info Tiles */}
        <View style={styles.row}>
          <View style={styles.infoTile}>
            <View style={styles.tileHeader}>
              <Ionicons name="barbell-outline" size={16} color={COLORS.primary} />
              <Text style={styles.tileTag}>WEIGHT</Text>
            </View>
            <Text style={styles.tileValue}>180 lbs</Text>
            <Text style={styles.tileSub}>^ Baseline</Text>
          </View>
          <View style={{ width: 16 }} />
          <View style={styles.infoTile}>
            <View style={styles.tileHeader}>
              <Ionicons name="flash-outline" size={16} color={COLORS.primary} />
              <Text style={styles.tileTag}>ACTIVITY</Text>
            </View>
            <Text style={styles.tileValue}>Active</Text>
            <Text style={styles.tileSub}>+ 15% Boost</Text>
          </View>
        </View>

        <View style={styles.descBox}>
          <Text style={styles.descText}>
            We've calculated your optimal water intake based on your body metrics, movement data, and performance history.
          </Text>
        </View>

      </ScrollView>
      <View style={styles.footer}>
        <Button title="START TRACKING" onPress={() => router.replace('/')} variant="primary" />
        <Text style={styles.footerBrand}>AFORCE HIGH PERFORMANCE V2.0</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: moderateScale(24), paddingBottom: moderateScale(40), alignItems: 'center' },

  title: { color: COLORS.text, fontSize: moderateScale(32), fontWeight: '800', textAlign: 'center', marginBottom: moderateScale(40), marginTop: moderateScale(20) },

  metricCard: { width: '100%', backgroundColor: COLORS.card, borderRadius: moderateScale(24), padding: moderateScale(30), alignItems: 'center', marginBottom: moderateScale(20), borderWidth: 1, borderColor: '#1F1F1F' },
  circleInner: { alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' },
  metricValue: { color: COLORS.primary, fontSize: moderateScale(48), fontWeight: 'bold' },
  metricUnit: { fontSize: moderateScale(24), color: COLORS.primary },
  metricLabel: { color: COLORS.textDim, fontSize: moderateScale(12), fontWeight: 'bold', letterSpacing: 1.5, marginTop: moderateScale(4) },

  row: { flexDirection: 'row', width: '100%', marginBottom: moderateScale(24) },
  infoTile: { flex: 1, backgroundColor: COLORS.card, borderRadius: moderateScale(16), padding: moderateScale(20), borderWidth: 1, borderColor: COLORS.border },
  tileHeader: { flexDirection: 'row', alignItems: 'center', gap: moderateScale(6), marginBottom: moderateScale(12) },
  tileTag: { color: COLORS.textDim, fontSize: moderateScale(10), fontWeight: 'bold', letterSpacing: 1 },
  tileValue: { color: COLORS.text, fontSize: moderateScale(24), fontWeight: 'bold', marginBottom: moderateScale(12) },
  tileSub: { color: COLORS.primary, fontSize: moderateScale(12), fontWeight: '600' },

  descBox: { backgroundColor: '#0A0A0A', padding: moderateScale(20), borderRadius: moderateScale(16), borderWidth: 1, borderColor: '#1A1A1A' },
  descText: { color: COLORS.textDim, fontSize: moderateScale(13), lineHeight: 22, textAlign: 'center' },

  footer: { paddingHorizontal: moderateScale(24), paddingBottom: moderateScale(24), backgroundColor: COLORS.background },
  footerBrand: { color: '#444', fontSize: moderateScale(10), fontWeight: 'bold', letterSpacing: 2, textAlign: 'center', marginTop: moderateScale(16) }
});
