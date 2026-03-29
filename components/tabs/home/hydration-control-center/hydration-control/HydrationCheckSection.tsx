import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { COLORS } from '../../../../../constants/theme';

const CHECK_ITEMS = [
  {
    id: 'urine-color',
    title: 'Urine Color',
    subtitle: 'Visual biological indicator',
    icon: 'color-palette-outline',
  },
  {
    id: 'body-symptoms',
    title: 'Body Symptoms',
    subtitle: 'Dry mouth, dizziness, etc.',
    icon: 'heart-outline',
  },
  {
    id: 'energy-level',
    title: 'Energy Level',
    subtitle: 'Visual biological indicator',
    icon: 'flash-outline', // Or another icon for energy
  },
];

export function HydrationCheckSection() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>HYDRATION CHECK</Text>

      <TouchableOpacity style={styles.mainBtn} activeOpacity={0.8}>
        <Text style={styles.mainBtnText}>Start Daily Check-in</Text>
      </TouchableOpacity>

      <View style={styles.itemList}>
        {CHECK_ITEMS.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.itemRow} 
            activeOpacity={0.7}
            onPress={() => {
              if (item.id === 'urine-color') {
                router.push('/track/urine-color' as any);
              } else if (item.id === 'body-symptoms') {
                router.push('/track/body-symptoms' as any);
              } else if (item.id === 'energy-level') {
                router.push('/track/energy' as any);
              }
            }}
          >
            <View style={styles.iconCircle}>
              <Ionicons name={item.icon as any} size={moderateScale(24)} color={COLORS.primary} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={moderateScale(20)} color={COLORS.textDim} />
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
  mainBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(16),
    paddingVertical: moderateScale(20),
    alignItems: 'center',
    marginBottom: moderateScale(20),
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  mainBtnText: {
    color: '#000000',
    fontSize: moderateScale(18),
    fontWeight: '800',
  },
  itemList: {
    gap: moderateScale(12),
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    padding: moderateScale(16),
  },
  iconCircle: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(28),
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(16),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: COLORS.text,
    fontSize: moderateScale(16),
    fontWeight: '700',
    marginBottom: moderateScale(4),
  },
  subtitle: {
    color: COLORS.textDim,
    fontSize: moderateScale(13),
    fontWeight: '500',
  },
});
