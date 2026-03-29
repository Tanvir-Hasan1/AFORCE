import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants/theme';

export function HydrationControlCard() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <Ionicons name="options-outline" size={moderateScale(24)} color={COLORS.primary} />
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hydration Control Center</Text>
        <Text style={styles.subtitle}>Manage targets & bio-sync sensors</Text>
      </View>
      
      <View style={styles.chevronContainer}>
        <Ionicons name="chevron-forward" size={moderateScale(20)} color={COLORS.textDim} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(16),
    marginBottom: moderateScale(24),
  },
  iconContainer: {
    width: moderateScale(56),
    height: moderateScale(56),
    backgroundColor: '#000000',
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(16),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: COLORS.text,
    fontSize: moderateScale(17),
    fontWeight: '700',
    marginBottom: moderateScale(2),
  },
  subtitle: {
    color: COLORS.textDim,
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
  chevronContainer: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
