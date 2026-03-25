import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export default function HydrateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hydrate Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, alignItems: 'center', justifyContent: 'center' },
  text: { color: COLORS.primary, fontSize: moderateScale(20) }
});
