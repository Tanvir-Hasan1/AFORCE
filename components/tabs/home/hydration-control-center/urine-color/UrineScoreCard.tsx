import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../../../constants/theme';

export function UrineScoreCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.labelText}>AFORCE HYDRATION SCORE</Text>
        <Text style={[styles.valueText, { color: COLORS.primary }]}>
          62<Text style={styles.unitText}> / 100</Text>
        </Text>
      </View>

      <View style={styles.progressBg}>
        <View style={[styles.progressFill, { width: '62%' }]} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerLabel}>62% AFORCE HYDRATION SCORE</Text>
        <Text style={[styles.footerLabel, { color: '#FFD700' }]}>MODERATE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(24),
    marginBottom: moderateScale(32),
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: moderateScale(16),
  },
  labelText: {
    color: COLORS.textDim,
    fontSize: moderateScale(11),
    fontWeight: '700',
    marginBottom: moderateScale(8),
  },
  valueText: {
    fontSize: moderateScale(32),
    fontWeight: 'bold',
  },
  unitText: {
    color: COLORS.textDim,
    fontSize: moderateScale(18),
  },
  progressBg: {
    height: moderateScale(10),
    backgroundColor: '#1A1A1A',
    borderRadius: moderateScale(5),
    marginBottom: moderateScale(16),
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(5),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLabel: {
    color: COLORS.textDim,
    fontSize: moderateScale(10),
    fontWeight: '700',
  },
});
