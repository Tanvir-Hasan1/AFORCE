import { moderateScale } from 'react-native-size-matters';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { AuthInput } from '../../components/auth/create-account/AuthInput';
import { SocialAuthButton } from '../../components/auth/create-account/SocialAuthButton';
import { Button } from '../../components/Button';

export default function CreateAccountScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Start your hydration journey today.</Text>

      <View style={styles.form}>
        <AuthInput label="Email" placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none" />
        <AuthInput 
          label="Password" 
          placeholder="Create a password" 
          isPassword 
          showPassword={showPassword} 
          onTogglePassword={() => setShowPassword(!showPassword)} 
        />
        <AuthInput 
          label="Confirm Password" 
          placeholder="Repeat your password" 
          isPassword 
          showPassword={showConfirm} 
          onTogglePassword={() => setShowConfirm(!showConfirm)} 
        />
      </View>

      {/* Spacing above the continue button */}
      <View style={{ marginTop: 8 }}>
        <Button title="Continue" onPress={() => router.push('/auth/profile-setup-body')} variant="primary" />
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      <SocialAuthButton title="Continue with Apple" iconName="logo-apple" onPress={() => {}} />
      <SocialAuthButton title="Continue with Google" iconName="logo-google" onPress={() => {}} />

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity><Text style={styles.loginText}>Log In</Text></TouchableOpacity>
      </View>

      <Text style={styles.termsText}>
        BY SIGNING UP YOU AGREE TO OUR TERMS OF{'\n'}SERVICE AND PRIVACY POLICY
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: moderateScale(24), paddingBottom: moderateScale(40) },
  title: { fontSize: moderateScale(28), color: COLORS.text, fontWeight: 'bold', marginBottom: moderateScale(8) },
  subtitle: { fontSize: moderateScale(15), color: COLORS.textDim, marginBottom: moderateScale(32) },
  form: { marginBottom: moderateScale(8) },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: moderateScale(24) },
  dividerLine: { flex: 1, height: moderateScale(1), backgroundColor: COLORS.border },
  dividerText: { color: '#666', paddingHorizontal: moderateScale(16), fontSize: moderateScale(12), fontWeight: 'bold' },
  footerRow: { flexDirection: 'row', justifyContent: 'center', marginTop: moderateScale(32), marginBottom: moderateScale(24) },
  footerText: { color: COLORS.textDim, fontSize: moderateScale(14) },
  loginText: { color: COLORS.primary, fontSize: moderateScale(14), fontWeight: 'bold' },
  termsText: { color: '#444', fontSize: moderateScale(10), textAlign: 'center', letterSpacing: 1, lineHeight: 18 }
});
