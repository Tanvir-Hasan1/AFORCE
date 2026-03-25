import { moderateScale } from 'react-native-size-matters';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { HeaderProgress } from '../../components/auth/profile-setup/HeaderProgress';
import { MetricAdjuster } from '../../components/auth/profile-setup/MetricAdjuster';
import { ActivityTile } from '../../components/auth/profile-setup/ActivityTile';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileSetupBodyScreen() {
  const router = useRouter();
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(180);
  const [age, setAge] = useState<number>(28);
  const [gender, setGender] = useState<string>('Male');
  const [activity, setActivity] = useState<string>('Moderate');

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <HeaderProgress step={1} totalSteps={3} />
        
        <Text style={styles.title}>Tell us about your body</Text>

        <View style={styles.row}>
          <MetricAdjuster label="WEIGHT (LBS)" value={weight.toString()} onDecrease={() => setWeight(w => Math.max(0, w - 1))} onIncrease={() => setWeight(w => w + 1)} />
          <View style={{width: 16}} />
          <MetricAdjuster label="HEIGHT (FT)" value={height.toString()} onDecrease={() => setHeight(h => Math.max(0, h - 1))} onIncrease={() => setHeight(h => h + 1)} />
        </View>

        <View style={styles.row}>
          <MetricAdjuster label="AGE" value={age.toString()} onDecrease={() => setAge(a => Math.max(0, a - 1))} onIncrease={() => setAge(a => a + 1)} />
          <View style={{width: 16}} />
          <MetricAdjuster label="GENDER" value={gender} isCustomArrow onDecrease={() => setGender(gender === 'Male' ? 'Female' : 'Male')} onIncrease={() => setGender(gender === 'Male' ? 'Female' : 'Male')} />
        </View>

        <Text style={styles.subhead}>Activity Level</Text>
        
        <ActivityTile title="Sedentary" description="Little to no exercise" iconName="bed-outline" selected={activity === 'Sedentary'} onSelect={() => setActivity('Sedentary')} />
        <ActivityTile title="Moderate" description="Exercise 3-4 times a week" iconName="walk-outline" selected={activity === 'Moderate'} onSelect={() => setActivity('Moderate')} />
        <ActivityTile title="Active" description="Daily exercise or intense sports" iconName="barbell-outline" selected={activity === 'Active'} onSelect={() => setActivity('Active')} />
        <ActivityTile title="Professional" description="Very intense daily training" iconName="flash-outline" selected={activity === 'Professional'} onSelect={() => setActivity('Professional')} />

      </ScrollView>
      <View style={styles.footer}>
        <Button title="Continue" onPress={() => router.push('/auth/profile-setup-fitness')} variant="primary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: moderateScale(24), paddingBottom: moderateScale(40) },
  title: { color: COLORS.text, fontSize: moderateScale(24), fontWeight: 'bold', marginBottom: moderateScale(24) },
  row: { flexDirection: 'row', marginBottom: moderateScale(16) },
  subhead: { color: COLORS.textDim, fontSize: moderateScale(13), fontWeight: '600', marginTop: moderateScale(8), marginBottom: moderateScale(16) },
  footer: { paddingHorizontal: moderateScale(24), paddingBottom: moderateScale(16), backgroundColor: COLORS.background }
});
