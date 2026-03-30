import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/theme";
import { ProfileHeader } from "@/components/tabs/profile/ProfileHeader";
import { UserInfoCard } from "@/components/tabs/profile/UserInfoCard";
import { ProfileStatsRow } from "@/components/tabs/profile/ProfileStatsRow";
import { ActionItem } from "@/components/tabs/profile/ActionItem";
import { MilestonesSection } from "@/components/tabs/profile/MilestonesSection";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ProfileHeader />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <UserInfoCard />
        
        <ProfileStatsRow />
        
        <View style={styles.actionSection}>
          <ActionItem 
            icon="bar-chart-outline" 
            title="Hydration Plan" 
            subtext="Personalized targets & dynamic algorithm details." 
            onPress={() => router.push('/couching/hydration-plan')}
          />
          <ActionItem 
            icon="watch-outline" 
            title="Wearable Integrations" 
            subtext="Sync with Apple Health, Google Health & devices." 
            onPress={() => router.push('/profile/integrations')}
          />
          <ActionItem 
            icon="flame-outline" 
            title="Hydration Streak" 
            subtext="System status: Optimal. 7 consecutive days logged."
            status="ACTIVE"
          />
          <ActionItem 
            icon="bookmark-outline" 
            title="Performance Library" 
            subtext="12 saved coaching & expert hydration protocols." 
          />
        </View>

        <MilestonesSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  actionSection: {
    marginTop: 10,
  },
});
