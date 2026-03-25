import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>AFORCE</Text>
          <View style={styles.langSelector}>
            <Text style={styles.langText}>🇬🇧 United States</Text>
          </View>
        </View>

        {/* Product Image Area */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/hero.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        {/* Text Content */}
        <View style={styles.textContent}>
          <Text style={styles.title}>Hydration Intelligence{'\n'}for Your Body</Text>
          <Text style={styles.subtitle}>
            AI-powered hydration that adapts to{'\n'}your activity, environment, and{'\n'}performance.
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button title="Create Account" onPress={() => router.push('/auth/create-account')} variant="primary" />
          <Button title="Sign In" onPress={() => router.replace('/(tabs)' as any)} variant="secondary" />
        </View>

        {/* Social Login */}
        <View style={styles.socialSection}>
          <Text style={styles.socialText}>OR CONNECT WITH</Text>
          <View style={styles.socialButtonsRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Ionicons name="logo-apple" size={24} color={COLORS.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Image
                source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(20)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(20)
  },
  logo: {

    color: COLORS.primary,
    fontSize: moderateScale(20),
    fontWeight: '900'
  },
  langSelector: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(20)
  },
  langText: {
    color: '#A0A0A0',
    fontSize: moderateScale(12)
  },

  imageContainer: {
    alignItems: 'center',
    marginVertical: moderateScale(40),
    height: moderateScale(350),
    justifyContent: 'center'
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(20)
  },

  textContent: {
    alignItems: 'center', marginBottom: moderateScale(30)
  },
  title: {
    color: COLORS.text, fontSize: moderateScale(28), fontWeight: '800', textAlign: 'center', marginBottom: moderateScale(16)
  },
  subtitle: {
    color: COLORS.textDim, fontSize: moderateScale(15), textAlign: 'center', lineHeight: 24
  },

  buttonContainer: {
    gap: moderateScale(16), marginBottom: moderateScale(40)
  },
  primaryBtn: {
    backgroundColor: COLORS.primary, paddingVertical: moderateScale(18), borderRadius: moderateScale(30), alignItems: 'center'
  },
  primaryBtnText: {
    color: COLORS.background, fontSize: moderateScale(16), fontWeight: 'bold'
  },
  secondaryBtn: {
    backgroundColor: COLORS.background, borderWidth: 1, borderColor: '#333', paddingVertical: moderateScale(18), borderRadius: moderateScale(30), alignItems: 'center'
  },
  secondaryBtnText: {
    color: COLORS.text, fontSize: moderateScale(16), fontWeight: 'bold'
  },

  socialSection: {
    alignItems: 'center', marginBottom: moderateScale(20)
  },
  socialText: {
    color: '#666', fontSize: moderateScale(10), fontWeight: 'bold', letterSpacing: 2, marginBottom: moderateScale(16)
  },
  socialButtonsRow: {
    flexDirection: 'row', gap: moderateScale(20)
  },
  socialBtn: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: '#0A0A0A',
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialIcon: {
    fontSize: moderateScale(20)
  }
});
