import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export const HealthMetricsGrid = () => {
  return (
    <View style={styles.container}>
      <MetricCard icon="walk" color="#D4FF00" label="Steps" value="9,200" />
      <MetricCard icon="thermometer" color="#D4FF00" label="Temp" value="31°C" />
      <MetricCard icon="fitness" color="#D4FF00" label="Workout" value="45 min" />
      <MetricCard icon="water" color="#D4FF00" label="Humidity" value="68%" />
    </View>
  );
};

const MetricCard = ({ icon, color, label, value }: any) => (
  <View style={styles.card}>
    <Ionicons name={icon} size={20} color={color} style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginHorizontal: moderateScale(20), 
    marginBottom: moderateScale(32) 
  },
  card: { 
    width: moderateScale(76), 
    backgroundColor: '#111', 
    borderRadius: moderateScale(16), 
    padding: moderateScale(12),
    borderWidth: 1,
    borderColor: '#222',
    alignItems: 'flex-start'
  },
  icon: { marginBottom: 8 },
  label: { color: '#666', fontSize: moderateScale(10), fontWeight: 'bold', marginBottom: 4 },
  value: { color: 'white', fontSize: moderateScale(12), fontWeight: '900' },
});
