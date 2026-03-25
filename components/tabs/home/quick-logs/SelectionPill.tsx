import { moderateScale } from 'react-native-size-matters';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../constants/theme';

interface SelectionPillProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  flex?: boolean; // If true, expands to fill grid width automatically
}

export function SelectionPill({ label, selected, onPress, flex }: SelectionPillProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.pill, 
        selected && styles.pillSelected,
        flex && { flex: 1 }
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: '#1A1A1A',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(24),
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pillSelected: {
    backgroundColor: '#262B00',
    borderColor: COLORS.primary
  },
  label: {
    color: '#CCC',
    fontSize: moderateScale(12),
    fontWeight: '600'
  },
  labelSelected: {
    color: COLORS.primary,
    fontWeight: 'bold'
  }
});
