import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../../../../constants/theme';

export const CategoryChips = () => {
  const [active, setActive] = useState('Workout');
  const categories = ['Workout', 'Hydration', 'Recovery', 'Nutrition'];

  return (
    <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.container}
        contentContainerStyle={styles.content}
    >
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          onPress={() => setActive(cat)}
          style={[
            styles.chip,
            active === cat && styles.activeChip
          ]}
        >
          <Text style={[styles.chipText, active === cat && styles.activeChipText]}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: moderateScale(32) },
  content: { gap: moderateScale(12) },
  chip: { 
    paddingHorizontal: moderateScale(22), 
    paddingVertical: moderateScale(10), 
    borderRadius: moderateScale(25), 
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#222',
  },
  activeChip: { backgroundColor: COLORS.primary },
  chipText: { color: COLORS.text, fontSize: moderateScale(14), fontWeight: '600' },
  activeChipText: { color: 'black' },
});
