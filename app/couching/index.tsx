import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { VideoHeader } from '../../components/tabs/couching/couching-detail/VideoHeader';
import { PerformanceProjection } from '../../components/tabs/couching/couching-detail/PerformanceProjection';
import { TechnicalPoints } from '../../components/tabs/couching/couching-detail/TechnicalPoints';
import { SuggestedRoutine } from '../../components/tabs/couching/couching-detail/SuggestedRoutine';
import { RecommendedFuel } from '../../components/tabs/couching/couching-detail/RecommendedFuel';

import { CustomHeader } from '../../components/ui/CustomHeader';

export default function CoachingDetailScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Hydration Strategy" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VideoHeader />
        
        <PerformanceProjection />
        
        <TechnicalPoints />
        
        <SuggestedRoutine />
        
        <RecommendedFuel />
      </ScrollView>

      {/* Sticky Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBtn}>
          <Ionicons name="add-circle" size={24} color="black" />
          <Text style={styles.footerBtnText}>Add to My Hydration Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  footer: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    padding: moderateScale(20), 
    paddingBottom: moderateScale(40),
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  footerBtn: { 
    backgroundColor: COLORS.primary, 
    height: moderateScale(56), 
    borderRadius: moderateScale(16), 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 12 
  },
  footerBtnText: { color: 'black', fontSize: moderateScale(16), fontWeight: '900' },
});
