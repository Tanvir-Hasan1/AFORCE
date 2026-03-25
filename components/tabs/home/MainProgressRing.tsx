import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';
import Svg, { Circle } from 'react-native-svg';

export function MainProgressRing() {
  const radius = 110;
  const strokeWidth = 14;
  const size = (radius + strokeWidth) * 2;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle cx={size/2} cy={size/2} r={radius} stroke="#1A2200" strokeWidth={strokeWidth} fill="transparent" />
        <Circle cx={size/2} cy={size/2} r={radius} stroke={COLORS.primary} strokeWidth={strokeWidth} fill="transparent" strokeDasharray={`${Math.PI*2*radius * 0.8}, ${Math.PI*2*radius}`} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`} />
      </Svg>
      <View style={styles.innerContent}>
        <Text style={styles.scoreText}>82</Text>
        <Text style={styles.statusText}>OPTIMAL</Text>
        <Text style={styles.subText}>Hydration</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', marginVertical: moderateScale(40), alignSelf: 'center' },
  innerContent: { position: 'absolute', alignItems: 'center' },
  scoreText: { color: COLORS.text, fontSize: moderateScale(64), fontWeight: '900', letterSpacing: -2 },
  statusText: { color: COLORS.primary, fontSize: moderateScale(13), fontWeight: '800', letterSpacing: 1.5, marginTop: moderateScale(4) },
  subText: { color: COLORS.textDim, fontSize: moderateScale(13), marginTop: moderateScale(2) }
});
