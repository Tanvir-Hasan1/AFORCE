import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export function CustomHeader({ title }: { title: string }) {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={20} color={COLORS.text} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: moderateScale(20), 
    paddingTop: moderateScale(20), 
    paddingBottom: moderateScale(20),
    backgroundColor: COLORS.background
  },
  backBtn: { width: moderateScale(44), height: moderateScale(44), borderRadius: moderateScale(22), backgroundColor: '#1A1A1A', alignItems: 'center', justifyContent: 'center' },
  title: { color: COLORS.text, fontSize: moderateScale(18), fontWeight: 'bold' },
  placeholder: { width: moderateScale(44) }
});
