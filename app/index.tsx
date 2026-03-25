import { moderateScale } from 'react-native-size-matters';
import { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../constants/theme';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.logo}>AFORCE</Text>
        <Text style={styles.taglineTop}>FUEL YOUR BODY WITH ALKALINE POWER</Text>
        <ActivityIndicator size="large" color={COLORS.primary} style={styles.loader} />
      </View>
      <Text style={styles.taglineBottom}>Fuel Your Body With Alkaline Power</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: COLORS.primary,
    fontSize: moderateScale(48),
    fontWeight: '900',
    letterSpacing: -1,
  },
  taglineTop: {
    color: COLORS.primary,
    fontSize: moderateScale(10),
    fontWeight: '700',
    marginTop: moderateScale(4),
    letterSpacing: 1,
  },
  loader: {
    marginTop: moderateScale(60),
  },
  taglineBottom: {
    color: '#666666',
    fontSize: moderateScale(14),
    marginBottom: moderateScale(40),
    letterSpacing: 0.5,
  },
});
