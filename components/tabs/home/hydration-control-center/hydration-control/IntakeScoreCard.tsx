import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../../../constants/theme';

export function IntakeScoreCard() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.labelText}>DAILY INTAKE</Text>
          <Text style={styles.valueText}>
            1.8L<Text style={styles.unitText}> / 2.7L</Text>
          </Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.labelText}>AFORCE HYDRATION SCORE</Text>
          <Text style={[styles.valueText, { color: COLORS.primary }]}>
            82<Text style={[styles.unitText, { color: COLORS.textDim }]}> / 100</Text>
          </Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: '66%' }]} />
        </View>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomLabel}>66% AFORCE HYDRATION SCORE</Text>
        <Text style={[styles.bottomLabel, { color: COLORS.primary, fontWeight: '800' }]}>OPTIMAL STATE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(24),
    marginBottom: moderateScale(24),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(20),
  },
  labelText: {
    color: COLORS.textDim,
    fontSize: moderateScale(11),
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: moderateScale(12),
  },
  valueText: {
    color: COLORS.text,
    fontSize: moderateScale(28),
    fontWeight: 'bold',
  },
  unitText: {
    color: COLORS.textDim,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  progressContainer: {
    marginBottom: moderateScale(20),
  },
  progressBg: {
    height: moderateScale(12),
    backgroundColor: '#1A1A1A',
    borderRadius: moderateScale(6),
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(6),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomLabel: {
    color: COLORS.textDim,
    fontSize: moderateScale(10),
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
