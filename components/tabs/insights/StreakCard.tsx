import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export const StreakCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name="flame" size={24} color={COLORS.primary} />
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>HYDRATION STREAK</Text>
        <View style={styles.valueRow}>
          <Text style={styles.value}>6 DAYS</Text>
          <Ionicons name="checkmark-circle" size={16} color="#E67E22" style={{ marginLeft: 6 }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', 
    backgroundColor: '#0A0B1A', 
    borderRadius: moderateScale(16), 
    padding: moderateScale(16), 
    marginHorizontal: moderateScale(20), 
    marginBottom: moderateScale(20),
    alignItems: 'center',
    gap: 16
  },
  iconContainer: { 
    width: moderateScale(48), 
    height: moderateScale(48), 
    borderRadius: moderateScale(24), 
    backgroundColor: '#1A1C00', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  column: { flex: 1 },
  label: { color: COLORS.primary, fontSize: moderateScale(10), fontWeight: '900', letterSpacing: 1, marginBottom: 4 },
  valueRow: { flexDirection: 'row', alignItems: 'center' },
  value: { color: 'white', fontSize: moderateScale(20), fontWeight: '900' },
});
