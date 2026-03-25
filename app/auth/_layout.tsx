import { moderateScale } from 'react-native-size-matters';
import { Stack } from 'expo-router';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AuthLayout() {
  const router = useRouter();

  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: COLORS.background },
      headerTintColor: COLORS.primary,
      headerTitleAlign: 'center',
      headerTitleStyle: { fontWeight: '900', fontSize: 20 },
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
      )
    }}>
      <Stack.Screen name="create-account" options={{ title: 'AFORCE' }} />
      <Stack.Screen name="profile-setup-body" options={{ title: 'AFORCE' }} />
      <Stack.Screen name="profile-setup-fitness" options={{ title: 'AFORCE' }} />
      <Stack.Screen name="notifications" options={{ title: 'AFORCE' }} />
      <Stack.Screen name="plan-ready" options={{ title: 'ONBOARDING' }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  backButton: {
    padding: moderateScale(8),
    marginLeft: moderateScale(-8)
  }
});
