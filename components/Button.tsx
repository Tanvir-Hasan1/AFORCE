import { moderateScale } from 'react-native-size-matters';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  const isPrimary = variant === 'primary';
  return (
    <TouchableOpacity
      style={[styles.button, isPrimary ? styles.primaryBtn : styles.secondaryBtn]}
      onPress={onPress}
    >
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: moderateScale(18),
    borderRadius: moderateScale(30),
    alignItems: 'center',
  },
  primaryBtn: {
    backgroundColor: COLORS.primary,
  },
  secondaryBtn: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: '#333',
  },
  text: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  primaryText: {
    color: COLORS.background,
  },
  secondaryText: {
    color: COLORS.text,
  },
});
