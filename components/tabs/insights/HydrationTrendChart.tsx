import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../constants/theme';

const DATA = [
  { day: 'MON', value: 0.7 },
  { day: 'TUE', value: 0.6 },
  { day: 'WED', value: 0.75 },
  { day: 'THU', value: 0.5 },
  { day: 'FRI', value: 0.9, isBest: true },
  { day: 'SAT', value: 0.65 },
];

export const HydrationTrendChart = () => {
  const [selectedDay, setSelectedDay] = useState('FRI');

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Hydration Trend</Text>
        <View style={styles.metrics}>
          <Metric label="AVG" value="76" />
          <Metric label="LOWEST" value="63" subValue="THU" color="#FF4B4B" />
          <Metric label="BEST" value="63" subValue="FRI" isHighlighted />
        </View>
      </View>

      <View style={styles.chartContainer}>
        {DATA.map((item) => (
          <TouchableOpacity 
            key={item.day} 
            activeOpacity={0.8}
            onPress={() => setSelectedDay(item.day)}
            style={styles.barColumn}
          >
            <View style={[
              styles.bar, 
              { height: `${item.value * 100}%` },
              selectedDay === item.day && styles.activeBar
            ]}>
              {selectedDay === item.day && (
                <View style={styles.activeDot} />
              )}
            </View>
            <Text style={[styles.dayText, selectedDay === item.day && styles.activeDayText]}>
                {item.day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Metric = ({ label, value, subValue, isHighlighted, color }: any) => (
  <View style={styles.metricItem}>
    <Text style={styles.metricLabel}>{label}</Text>
    <View style={styles.metricValueLine}>
      <Text style={[
        styles.metricValue, 
        isHighlighted && { color: COLORS.primary },
        color && { color }
      ]}>{value}</Text>
      {subValue && <Text style={styles.metricSubValue}>{subValue}</Text>}
    </View>
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
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: moderateScale(32) 
  },
  title: { color: "white", fontSize: moderateScale(15), fontWeight: "bold" },

  metrics: { flexDirection: "row", gap: 8 },
  metricItem: {
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#333",
    paddingLeft: 8,
  },
  metricLabel: {
    color: "#666",
    fontSize: moderateScale(8),
    fontWeight: "900",
    marginBottom: 4,
  },
  metricValueLine: { flexDirection: "row", alignItems: "baseline", gap: 4 },
  metricValue: {
    color: "white",
    fontSize: moderateScale(12),
    fontWeight: "bold",
  },
  metricSubValue: {
    color: "#666",
    fontSize: moderateScale(8),
    fontWeight: "bold",
  },

  chartContainer: { height: moderateScale(140), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 20 },
  barColumn: { flex: 1, alignItems: 'center', gap: 12 },
  bar: { width: '85%', backgroundColor: '#2A2C00', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center' },
  activeBar: { 
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10
  },
  activeDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: 'white', marginTop: -3, zIndex: 10 },
  dayText: { color: '#444', fontSize: moderateScale(10), fontWeight: '900' },
  activeDayText: { color: 'white' }
});
