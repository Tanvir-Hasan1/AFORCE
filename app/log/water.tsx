import { moderateScale } from 'react-native-size-matters';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { CustomHeader } from '../../components/ui/CustomHeader';
import { SourceSelector } from '../../components/tabs/home/quick-logs/SourceSelector';
import { SelectionPill } from '../../components/tabs/home/quick-logs/SelectionPill';
import { HydrationTip } from '../../components/tabs/home/quick-logs/HydrationTip';
import { Button } from '../../components/Button';

export default function WaterLogScreen() {
  const router = useRouter();
  const [volume, setVolume] = useState<number>(12);

  const handleSourceSwitch = (newSource: 'water' | 'electrolyte') => {
    if (newSource === 'electrolyte') {
      router.replace('/log/electrolyte' as any);
    }
  };

  const volumes = [8, 12, 16, 24, 32];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <CustomHeader title="Custom Intake" />
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.sectionHeader}>SELECT SOURCE</Text>
        <View style={styles.row}>
          <SourceSelector type="water" selected={true} onPress={() => {}} />
          <View style={{width: 16}} />
          <SourceSelector type="electrolyte" selected={false} onPress={() => handleSourceSwitch('electrolyte')} />
        </View>

        <View style={styles.volumeCard}>
          <Text style={styles.sectionHeader}>VOLUME AMOUNT</Text>
          <View style={styles.valueRow}>
            <Text style={styles.hugeValue}>{volume}</Text>
            <Text style={styles.unitText}>oz</Text>
          </View>
          <View style={styles.pillGrid}>
            {volumes.map(v => (
              <View key={v} style={styles.pillWrapper}>
                <SelectionPill label={`${v} oz`} selected={volume === v} onPress={() => setVolume(v)} />
              </View>
            ))}
          </View>
        </View>

        <HydrationTip 
          title="Hydration Tip" 
          body="Aim for consistent sips every 15-20 minutes for optimal performance during training." 
          iconName="water" 
        />

      </ScrollView>
      <View style={styles.footer}>
        <Button title="SAVE INTAKE" onPress={() => router.back()} variant="primary" />
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
  pillWrapper: { width: '30%' },
  footer: { paddingHorizontal: moderateScale(20), paddingBottom: moderateScale(20) }
});
