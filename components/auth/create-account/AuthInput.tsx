import { moderateScale } from 'react-native-size-matters';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

interface AuthInputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  onTogglePassword?: () => void;
  showPassword?: boolean;
}

export function AuthInput({ label, isPassword, onTogglePassword, showPassword, ...props }: AuthInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholderTextColor="#666"
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={onTogglePassword} style={styles.iconContainer}>
            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: moderateScale(20) },
  label: { color: '#E0E0E0', fontSize: moderateScale(13), fontWeight: '600', marginBottom: moderateScale(8) },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: moderateScale(12),
    height: moderateScale(56),
  },
  input: {
    flex: 1,
    color: COLORS.text,
    paddingHorizontal: moderateScale(16),
    fontSize: moderateScale(15),
  },
  iconContainer: { padding: moderateScale(16) }
});
