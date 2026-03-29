import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../../constants/theme';

export const SuggestedRoutine = () => {
  const steps = [
    { label: '01 MORNING HYDRATION', value: '16 oz water + 1 AForce stick' },
    { label: '02 POST-WORKOUT WINDOW', value: 'Electrolytes within 30 minutes' },
    { label: '03 DAILY TRACKING', value: 'Log intake in AForce OS' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="calendar-outline" size={18} color={COLORS.primary} />
        <Text style={styles.headerText}>SUGGESTED ROUTINE</Text>
      </View>
      <View style={styles.list}>
        {steps.map((step, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.line} />
            <Text style={styles.label}>{step.label}</Text>
            <Text style={styles.value}>{step.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#050505', borderRadius: moderateScale(20), padding: moderateScale(24), marginHorizontal: moderateScale(20), marginBottom: moderateScale(24) },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: moderateScale(24) },
  headerText: { color: COLORS.primary, fontSize: moderateScale(14), fontWeight: '900', letterSpacing: 1 },
  list: { gap: moderateScale(24) },
  item: { paddingLeft: moderateScale(16) },
  line: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, backgroundColor: COLORS.primary },
  label: { color: '#888', fontSize: moderateScale(11), fontWeight: '900', letterSpacing: 0.5, marginBottom: 4 },
  value: { color: 'white', fontSize: moderateScale(16), fontWeight: 'bold' },
});
