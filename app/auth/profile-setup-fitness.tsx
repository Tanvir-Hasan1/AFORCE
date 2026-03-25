import { moderateScale } from 'react-native-size-matters';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { HeaderProgress } from '../../components/auth/profile-setup/HeaderProgress';
import { FitnessIntegrationTile } from '../../components/auth/profile-setup/FitnessIntegrationTile';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileSetupFitnessScreen() {
  const router = useRouter();
  const [selectedFitness, setSelectedFitness] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <HeaderProgress step={2} totalSteps={3} />
        
        <Text style={styles.title}>Connect your fitness data</Text>
        <Text style={styles.subtitle}>This helps us calculate smarter hydration targets based on your activity levels.</Text>

        <FitnessIntegrationTile title="Apple Health" description="Sync steps and activity" iconName="heart" selected={selectedFitness === 'Apple'} onSelect={() => setSelectedFitness('Apple')} />
        <FitnessIntegrationTile title="Google Fit" description="Track workouts and vitals" iconName="fitness" selected={selectedFitness === 'Google'} onSelect={() => setSelectedFitness('Google')} />
        <FitnessIntegrationTile title="Whoop" description="Sync strain and recovery data" iconName="pulse-outline" selected={selectedFitness === 'Whoop'} onSelect={() => setSelectedFitness('Whoop')} />
        <FitnessIntegrationTile title="Samsung Health" description="Integrated health tracking" iconName="body-outline" selected={selectedFitness === 'Samsung'} onSelect={() => setSelectedFitness('Samsung')} />

        <Text style={styles.subhead}>DATA TO BE SYNCED</Text>
        
        <View style={styles.syncGrid}>
          <View style={styles.syncItem}><Ionicons name="checkmark-circle" size={20} color={COLORS.primary} /><Text style={styles.syncText}>Steps</Text></View>
          <View style={styles.syncItem}><Ionicons name="checkmark-circle" size={20} color={COLORS.primary} /><Text style={styles.syncText}>Workouts</Text></View>
          <View style={styles.syncItem}><Ionicons name="checkmark-circle" size={20} color={COLORS.primary} /><Text style={styles.syncText}>Heart Rate</Text></View>
          <View style={styles.syncItem}><Ionicons name="checkmark-circle" size={20} color={COLORS.primary} /><Text style={styles.syncText}>Sleep</Text></View>
        </View>

      </ScrollView>
      <View style={styles.footer}>
        <Button title="Connect" onPress={() => router.push('/auth/notifications')} variant="primary" />
        <TouchableOpacity style={styles.skipBtn} onPress={() => router.push('/auth/notifications')}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: moderateScale(24), paddingBottom: moderateScale(40) },
  title: { color: COLORS.text, fontSize: moderateScale(24), fontWeight: 'bold', marginBottom: moderateScale(8) },
  subtitle: { color: COLORS.textDim, fontSize: moderateScale(15), lineHeight: 22, marginBottom: moderateScale(32) },
  subhead: { color: '#666', fontSize: moderateScale(11), fontWeight: 'bold', letterSpacing: 1.5, marginTop: moderateScale(16), marginBottom: moderateScale(20) },
  syncGrid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: moderateScale(24) },
  syncItem: { width: '50%', flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(16), gap: moderateScale(10) },
  syncText: { color: COLORS.text, fontSize: moderateScale(13), fontWeight: '600' },
  footer: { paddingHorizontal: moderateScale(24), paddingBottom: moderateScale(16), backgroundColor: COLORS.background },
  skipBtn: { alignItems: 'center', marginTop: moderateScale(8), marginBottom: moderateScale(8) },
  skipText: { color: COLORS.textDim, fontSize: moderateScale(14), fontWeight: '600' }
});
