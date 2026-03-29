import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../../../constants/theme';

const ENTRY_ITEMS = [
  {
    id: 'quick-log',
    title: 'Quick Log',
    subtitle: 'Water or Glass',
    icon: 'water-outline',
  },
  {
    id: 'water-glass',
    title: 'Water or Glass',
    subtitle: 'Hydration Drinks',
    icon: 'grid-outline',
  },
  {
    id: 'tap-bottle',
    title: 'Tap Bottle',
    subtitle: 'AForce NFC Bottle',
    icon: 'flash',
  },
  {
    id: 'manual-entry',
    title: 'Manual Entry',
    subtitle: 'Custom Amount',
    icon: 'create-outline',
  },
];

export function QuickEntryGrid() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>QUICK ENTRY</Text>
      <View style={styles.grid}>
        {ENTRY_ITEMS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.7}>
            <View style={styles.iconCircle}>
              <Ionicons name={item.icon as any} size={moderateScale(24)} color={COLORS.primary} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(32),
  },
  sectionTitle: {
    color: COLORS.textDim,
    fontSize: moderateScale(11),
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: moderateScale(20),
    textTransform: 'uppercase',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: moderateScale(16),
  },
  card: {
    width: '48%',
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: moderateScale(160),
  },
  iconCircle: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(28),
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(24),
  },
  textContainer: {
    width: '100%',
  },
  title: {
    color: COLORS.text,
    fontSize: moderateScale(15),
    fontWeight: '700',
    marginBottom: moderateScale(4),
  },
  subtitle: {
    color: COLORS.textDim,
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
});
