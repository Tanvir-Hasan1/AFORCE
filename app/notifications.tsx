import { moderateScale } from 'react-native-size-matters';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { HydrationScoreCard } from '../components/notifications/HydrationScoreCard';
import { AISuggestionCard } from '../components/notifications/AISuggestionCard';
import { NotificationItem } from '../components/notifications/NotificationItem';

export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Hydration Score Card */}
        <HydrationScoreCard score={82} status="OPTIMAL" />

        {/* Section: NEW */}
        <Text style={styles.sectionTitle}>NEW</Text>
        
        {/* AI Suggestion Card */}
        <AISuggestionCard 
          title="AI Hydration Suggestion"
          body="Based on your recent activity, we recommend 500ml of electrolyte-rich water."
          onHydrate={() => console.log('Hydrate clicked')}
          onClose={() => console.log('Close clicked')}
        />

        {/* Section: TODAY */}
        <Text style={styles.sectionTitleToday}>TODAY</Text>

        {/* Notification Feed */}
        <View style={styles.feed}>
          <NotificationItem 
            icon="water" 
            iconBg={COLORS.primary + '22'} 
            iconColor="#FF3B30"
            title="Critical Hydration Alert" 
            time="10m ago" 
            body="Hydration levels dropped below 40% optimal level. Drink 12 oz water or 1 AForce electrolyte stick immediately."
          />
          <NotificationItem 
            icon="bulb" 
            iconBg="#2B3300" 
            iconColor={COLORS.primary}
            title="Pre-Workout Coaching" 
            time="2h ago" 
            body="Your workout starts in 30 mins. Sip 250ml now to optimize muscle recovery."
          />
          <NotificationItem 
            icon="sync" 
            iconBg="#1A1A1A" 
            iconColor="#4A90E2"
            title="Activity Synced" 
            time="4h ago" 
            body="Successfully imported heart rate and sweat data from Apple Health."
          />
          <NotificationItem 
            icon="trophy" 
            iconBg="#1A1A1A" 
            iconColor="#00FF66"
            title="Goal Reached" 
            time="6h ago" 
            body="Great job! You reached your 2.5L daily hydration goal."
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScale(16),
  },
  backBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { color: COLORS.text, fontSize: moderateScale(20), fontWeight: 'bold' },
  content: { padding: moderateScale(20) },
  sectionTitle: { color: COLORS.primary, fontSize: moderateScale(12), fontWeight: '900', letterSpacing: 1.5, marginBottom: moderateScale(16) },
  sectionTitleToday: { color: COLORS.textDim, fontSize: moderateScale(12), fontWeight: '900', letterSpacing: 1.5, marginTop: moderateScale(16), marginBottom: moderateScale(16) },
  feed: { gap: moderateScale(16) },
});
