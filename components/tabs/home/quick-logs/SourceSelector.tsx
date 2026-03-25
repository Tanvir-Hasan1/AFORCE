import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

interface SourceSelectorProps {
  type: 'water' | 'electrolyte';
  selected: boolean;
  onPress: () => void;
}

export function SourceSelector({ type, selected, onPress }: SourceSelectorProps) {
  const isWater = type === 'water';
  const label = isWater ? 'Water' : 'Electrolyte';
  const iconName = isWater ? 'water' : 'flash';
  
  return (
    <TouchableOpacity 
      style={[styles.container, selected && styles.containerSelected]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.iconRing, selected && styles.iconRingSelected]}>
        <Ionicons name={iconName} size={32} color={selected ? COLORS.primary : "#666"} />
      </View>
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    padding: moderateScale(24),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  containerSelected: {
    borderColor: COLORS.primary,
    backgroundColor: '#15170A',
  },
  iconRing: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(32),
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(16)
  },
  iconRingSelected: {
    backgroundColor: '#262B00'
  },
  label: {
    color: COLORS.textDim,
    fontSize: moderateScale(16),
    fontWeight: 'bold'
  },
  labelSelected: {
    color: COLORS.primary
  }
});
