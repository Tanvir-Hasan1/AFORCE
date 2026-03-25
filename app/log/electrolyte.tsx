import { moderateScale } from 'react-native-size-matters';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { CustomHeader } from '../../components/ui/CustomHeader';
import { SourceSelector } from '../../components/tabs/home/quick-logs/SourceSelector';
import { SelectionPill } from '../../components/tabs/home/quick-logs/SelectionPill';
import { StrengthSlider } from '../../components/tabs/home/quick-logs/StrengthSlider';
import { HydrationTip } from '../../components/tabs/home/quick-logs/HydrationTip';
import { Button } from '../../components/Button';

export default function ElectrolyteLogScreen() {
  const router = useRouter();
  const [volume, setVolume] = useState<number>(12);
  const [strength, setStrength] = useState<'low' | 'medium' | 'high'>('medium');
  const [type, setType] = useState<string>('AForce Hydration Stick');

  const handleSourceSwitch = (newSource: 'water' | 'electrolyte') => {
    if (newSource === 'water') {
      router.replace('/log/water' as any);
    }
  };

  const volumes = [8, 12, 16, 24, 32];
  const types = ["AForce Hydration Stick", "AForce Hydration Drink", "AForce Canister", "AForce Hydration Pouch"];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <CustomHeader title="Custom Intake" />
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.sectionHeader}>SELECT SOURCE</Text>
        <View style={styles.row}>
          <SourceSelector type="water" selected={false} onPress={() => handleSourceSwitch('water')} />
          <View style={{width: 16}} />
          <SourceSelector type="electrolyte" selected={true} onPress={() => {}} />
        </View>

        <View style={styles.volumeCard}>
          <Text style={styles.sectionHeader}>ELECTROLYTE AMOUNT</Text>
          <View style={styles.valueRow}>
            <Text style={styles.hugeValue}>{volume}</Text>
            <Text style={styles.unitText}>oz</Text>
          </View>
          <View style={styles.pillGrid}>
            {volumes.map(v => (
              <View key={v} style={styles.pillWrapperVolume}>
                <SelectionPill label={`${v} oz`} selected={volume === v} onPress={() => setVolume(v)} />
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.sectionHeader}>TYPE</Text>
        <View style={styles.pillGridLarge}>
          {types.map(t => (
            <View key={t} style={styles.pillWrapperType}>
              <SelectionPill flex label={t} selected={type === t} onPress={() => setType(t)} />
            </View>
          ))}
        </View>

        <StrengthSlider level={strength} onChange={setStrength} />

        <HydrationTip 
          title="Hydration Tip" 
          body="Electrolytes help your body to retain fluid balance and are critical for nerve and muscle function during peak performance." 
          iconName="bulb-outline" 
        />

      </ScrollView>
      <View style={styles.footer}>
        <Button title="SAVE ELECTROLYTE" onPress={() => router.back()} variant="primary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: moderateScale(20), paddingBottom: moderateScale(40) },
  sectionHeader: { color: COLORS.textDim, fontSize: moderateScale(11), fontWeight: 'bold', letterSpacing: 1.5, marginBottom: moderateScale(12) },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: moderateScale(24) },
  volumeCard: { backgroundColor: COLORS.card, borderRadius: moderateScale(20), padding: moderateScale(20), borderWidth: 1, borderColor: COLORS.border, marginBottom: moderateScale(24) },
  valueRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: moderateScale(20) },
  hugeValue: { color: COLORS.text, fontSize: moderateScale(56), fontWeight: '900', letterSpacing: -2 },
  unitText: { color: COLORS.primary, fontSize: moderateScale(20), fontWeight: 'bold', marginLeft: moderateScale(8) },
  pillGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: moderateScale(12) },
  pillWrapperVolume: { width: '30%' },
  pillGridLarge: { flexDirection: 'row', flexWrap: 'wrap', gap: moderateScale(12), marginBottom: moderateScale(32) },
  pillWrapperType: { width: '47%' },
  footer: { paddingHorizontal: moderateScale(20), paddingBottom: moderateScale(20) }
});
