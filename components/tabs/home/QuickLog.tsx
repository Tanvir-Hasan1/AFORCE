import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export function QuickLog() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>QUICK LOG</Text>
      <View style={styles.row}>
        
        <View style={styles.item}>
          <Pressable 
            style={({ pressed }) => [styles.circleBtn, { backgroundColor: pressed ? COLORS.primaryPress : '#1A1A1A' }]} 
            onPress={() => router.push('/log/water' as any)}
          >
            {({ pressed }) => (
              <Ionicons name="water-outline" size={24} color={pressed ? COLORS.background : COLORS.text} />
            )}
          </Pressable>
          <Text style={styles.label}>Water</Text>
        </View>

        <View style={styles.item}>
          <Pressable 
            style={({ pressed }) => [styles.circleBtn, { backgroundColor: pressed ? COLORS.primaryPress : '#1A1A1A' }]} 
            onPress={() => router.push('/log/electrolyte' as any)}
          >
            {({ pressed }) => (
              <Ionicons name="flash" size={24} color={pressed ? COLORS.background : COLORS.text} />
            )}
          </Pressable>
          <Text style={styles.label}>AForce</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: moderateScale(32) },
  sectionTitle: { color: COLORS.textDim, fontSize: moderateScale(12), fontWeight: '800', letterSpacing: 1.5, marginBottom: moderateScale(20) },
  row: { flexDirection: 'row', justifyContent: 'space-evenly' },
  item: { alignItems: 'center', gap: moderateScale(12) },
  circleBtn: { width: moderateScale(72), height: moderateScale(72), borderRadius: moderateScale(36), alignItems: 'center', justifyContent: 'center' },
  label: { color: COLORS.text, fontSize: moderateScale(13), fontWeight: '500' }
});
