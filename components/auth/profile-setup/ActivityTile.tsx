import { moderateScale } from 'react-native-size-matters';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

interface ActivityTileProps {
  title: string;
  description: string;
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  selected: boolean;
  onSelect: () => void;
}

export function ActivityTile({ title, description, iconName, selected, onSelect }: ActivityTileProps) {
  return (
    <TouchableOpacity 
      style={[styles.container, selected && styles.containerSelected]} 
      onPress={onSelect}
      activeOpacity={0.8}
    >
      <View style={styles.iconBox}>
        <Ionicons name={iconName} size={24} color={selected ? COLORS.primary : COLORS.textDim} />
      </View>
      <View style={styles.textCol}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center', padding: moderateScale(16), backgroundColor: COLORS.card,
    borderWidth: 1, borderColor: COLORS.border, borderRadius: moderateScale(16), marginBottom: moderateScale(12)
  },
  containerSelected: { borderColor: COLORS.primary, backgroundColor: '#1A1C0A' },
  iconBox: { width: moderateScale(48), height: moderateScale(48), borderRadius: moderateScale(12), backgroundColor: '#1F1F1F', alignItems: 'center', justifyContent: 'center', marginRight: moderateScale(16) },
  textCol: { flex: 1 },
  title: { color: COLORS.text, fontSize: moderateScale(16), fontWeight: '600', marginBottom: moderateScale(2) },
  description: { color: COLORS.textDim, fontSize: moderateScale(12) },
  radio: { width: moderateScale(20), height: moderateScale(20), borderRadius: moderateScale(10), borderWidth: 2, borderColor: '#444', alignItems: 'center', justifyContent: 'center' },
  radioSelected: { borderColor: COLORS.primary },
  radioInner: { width: moderateScale(10), height: moderateScale(10), borderRadius: moderateScale(5), backgroundColor: COLORS.primary }
});
