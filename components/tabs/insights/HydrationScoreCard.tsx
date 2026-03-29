import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export const HydrationScoreCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.label}>HYDRATION SCORE</Text>
        <Ionicons name="information-circle-outline" size={20} color="#888" />
      </View>
      
      <View style={styles.scoreRow}>
        <Text style={styles.score}>82</Text>
        <Text style={styles.total}> / 100</Text>
      </View>
      
      <Text style={styles.status}>Performance Zone: Optimal</Text>

      <View style={styles.statsGrid}>
        <StatItem label="INTAKE" value="1.9L" />
        <StatItem label="SWEAT LOSS" value="1.9L" />
        <StatItem label="TARGET" value="2.7L" />
        <StatItem label="DEFICIT" value="0.8L" isHighlighted />
      </View>
    </View>
  );
};

const StatItem = ({ label, value, isHighlighted }: { label: string, value: string, isHighlighted?: boolean }) => (
  <View style={styles.statItem}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={[styles.statValue, isHighlighted && { color: COLORS.primary }]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#111', 
    borderRadius: moderateScale(20), 
    padding: moderateScale(20), 
    marginHorizontal: moderateScale(20), 
    marginBottom: moderateScale(20),
    borderWidth: 1,
    borderColor: '#222'
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: moderateScale(16) },
  label: { color: '#888', fontSize: moderateScale(11), fontWeight: '900', letterSpacing: 1 },
  scoreRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: moderateScale(4) },
  score: { color: COLORS.primary, fontSize: moderateScale(56), fontWeight: '900' },
  total: { color: '#444', fontSize: moderateScale(20), fontWeight: 'bold' },
  status: { color: COLORS.text, fontSize: moderateScale(16), fontWeight: 'bold', marginBottom: moderateScale(32) },
  
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  statItem: { gap: 8 },
  statLabel: { color: '#444', fontSize: moderateScale(10), fontWeight: '900', letterSpacing: 0.5 },
  statValue: { color: 'white', fontSize: moderateScale(14), fontWeight: 'bold' },
});
