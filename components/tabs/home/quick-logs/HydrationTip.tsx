import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

interface HydrationTipProps {
  title: string;
  body: string;
  iconName: React.ComponentProps<typeof Ionicons>['name'];
}

export function HydrationTip({ title, body, iconName }: HydrationTipProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../../assets/images/gradient-light.png')} 
        style={styles.iconBox} 
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    padding: moderateScale(16),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1F1F1F'
  },
  iconBox: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(16),
    backgroundColor: '#262A00',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(16)
  },
  textContainer: {
    flex: 1
  },
  title: {
    color: COLORS.text,
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginBottom: moderateScale(4)
  },
  body: {
    color: COLORS.textDim,
    fontSize: moderateScale(12),
    lineHeight: 18
  }
});
