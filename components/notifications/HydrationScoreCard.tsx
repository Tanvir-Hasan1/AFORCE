import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../constants/theme';

interface HydrationScoreCardProps {
  score: number;
  status: string;
}

export const HydrationScoreCard: React.FC<HydrationScoreCardProps> = ({ score, status }) => {
  return (
    <View style={styles.scoreCard}>
      <View style={styles.scoreHeader}>
        <View style={styles.scoreRow}>
          <Ionicons name="flash" size={16} color={COLORS.primary} />
          <Text style={styles.scoreLabel}>Hydration Score</Text>
        </View>
        <View style={styles.scoreValueRow}>
          <Text style={styles.scoreValue}>{score}</Text>
          <Text style={styles.scoreTotal}> / 100</Text>
          <Text style={styles.scoreStatus}> • {status}</Text>
        </View>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${score}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreCard: { 
    backgroundColor: COLORS.card, 
    borderRadius: moderateScale(16), 
    padding: moderateScale(16),
    marginBottom: moderateScale(30),
    borderWidth: 1,
    borderColor: '#222',
  },
  scoreHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: moderateScale(12) },
  scoreRow: { flexDirection: 'row', alignItems: 'center', gap: moderateScale(8) },
  scoreLabel: { color: COLORS.text, fontSize: moderateScale(14), fontWeight: '600' },
  scoreValueRow: { flexDirection: 'row', alignItems: 'flex-end' },
  scoreValue: { color: COLORS.text, fontSize: moderateScale(16), fontWeight: 'bold' },
  scoreTotal: { color: COLORS.textDim, fontSize: moderateScale(13) },
  scoreStatus: { color: COLORS.primary, fontSize: moderateScale(10), fontWeight: 'bold', letterSpacing: 0.5 },
  progressBarBg: { height: moderateScale(6), backgroundColor: '#1A1A1A', borderRadius: moderateScale(3), overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: moderateScale(3) },
});
