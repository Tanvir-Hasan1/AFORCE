import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../../constants/theme';

export const TechnicalPoints = () => {
  const points = [
    "Electrolyte balance and serum optimization",
    "Cellular hydration mechanics during exertion",
    "Post-workout recovery timing windows"
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="list" size={18} color="#888" />
        <Text style={styles.headerText}>TECHNICAL POINTS</Text>
      </View>
      <View style={styles.list}>
        {points.map((point, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.checkInner}>
              <Ionicons name="checkmark-circle" size={24} color={COLORS.primary} />
            </View>
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#111', borderRadius: moderateScale(20), padding: moderateScale(20), marginHorizontal: moderateScale(20), marginBottom: moderateScale(24), borderStyle: 'dotted', borderWidth: 1, borderColor: '#333' },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: moderateScale(20) },
  headerText: { color: 'white', fontSize: moderateScale(14), fontWeight: '900', letterSpacing: 1 },
  list: { gap: moderateScale(16) },
  item: { flexDirection: 'row', alignItems: 'flex-start', gap: moderateScale(16) },
  checkInner: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' },
  pointText: { color: '#AAA', fontSize: moderateScale(15), lineHeight: 22, flex: 1, fontWeight: '500' },
});
