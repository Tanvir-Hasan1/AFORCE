import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export function SuggestionCard() {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name="beaker-outline" size={24} color={COLORS.background} />
      </View>
      <View style={styles.textCol}>
        <Text style={styles.title}>SUGGESTED HYDRATION</Text>
        <Text style={styles.body}>Drink 12–16 oz water + 1 AForce stick</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: COLORS.card, borderRadius: moderateScale(20), padding: moderateScale(16), alignItems: 'center', marginBottom: moderateScale(32) },
  iconBox: { width: moderateScale(56), height: moderateScale(56), borderRadius: moderateScale(12), backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', marginRight: moderateScale(16) },
  textCol: { flex: 1 },
  title: { color: COLORS.primary, fontSize: moderateScale(11), fontWeight: '800', letterSpacing: 1, marginBottom: moderateScale(6) },
  body: { color: COLORS.text, fontSize: moderateScale(15), fontWeight: '500', lineHeight: 22 }
});
