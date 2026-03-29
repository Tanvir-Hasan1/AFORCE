import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COLORS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { FeaturedMasterclass } from '../../components/tabs/couching/couching/FeaturedMasterclass';
import { CategoryChips } from '../../components/tabs/couching/couching/CategoryChips';
import { RecommendedCard } from '../../components/tabs/couching/couching/RecommendedCard';
import { CoachChoiceCard } from '../../components/tabs/couching/couching/CoachChoiceCard';

export default function CoachingScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <FeaturedMasterclass />
        <CategoryChips />
        
        <Text style={styles.sectionHeading}>RECOMMENDED FOR YOU</Text>
        
        <RecommendedCard 
          category="DAILY HABIT"
          title="HYDRATE BEFORE WORKOUTS"
          coach="Dr. Sarah Chen"
          duration="12 MIN"
          image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop"
        />
        <RecommendedCard 
          category="ATHLETE"
          title="MORNING HYDRATION ROUTINE"
          coach="Mike Rossi"
          duration="08 MIN"
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
          isFavorite
        />
        <RecommendedCard 
          category="ADVANCED"
          title="POST-WORKOUT REHYDRATION"
          coach="Elena Grant"
          duration="15 MIN"
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
        />
        
        <CoachChoiceCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: moderateScale(20) },
  sectionHeading: { color: '#444', fontSize: moderateScale(13), fontWeight: '900', letterSpacing: 1, marginBottom: moderateScale(16) },
});
