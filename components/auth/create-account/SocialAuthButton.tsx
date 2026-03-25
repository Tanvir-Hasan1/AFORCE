import { moderateScale } from 'react-native-size-matters';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

interface SocialAuthButtonProps {
  title: string;
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  onPress: () => void;
}

export function SocialAuthButton({ title, iconName, onPress }: SocialAuthButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name={iconName} size={20} color={COLORS.text} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(16),
    marginBottom: moderateScale(12),
    gap: moderateScale(12)
  },
  text: { color: COLORS.text, fontSize: moderateScale(14), fontWeight: '600' }
});
