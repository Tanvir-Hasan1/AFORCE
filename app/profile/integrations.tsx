import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";
import { CustomHeader } from "@/components/ui/CustomHeader";
import { AppSyncCard } from "@/components/profile/integrations/AppSyncCard";
import { WearableCard } from "@/components/profile/integrations/WearableCard";
import { IntegrationsInfo } from "@/components/profile/integrations/IntegrationsInfo";

export default function AppIntegrationsScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="App Integrations" />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.subtitle}>
          Sync health data for accurate hydration insights.
        </Text>

        <View style={styles.appsSection}>
          <AppSyncCard 
            icon="heart" 
            name="Apple Health" 
            isConnected={true} 
            lastSynced="2 mins ago" 
          />
          <AppSyncCard 
            icon="fitness" 
            name="Google Fit" 
            isConnected={false} 
          />
          <AppSyncCard 
            icon="fitness-outline" 
            name="Strava" 
            isConnected={false} 
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Wearables</Text>
          <Text style={styles.sectionSubtitle}>Apple Watch / Wear OS</Text>
        </View>

        <WearableCard />

        <IntegrationsInfo />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(20),
    paddingBottom: 40,
  },
  subtitle: {
    color: "#888",
    fontSize: moderateScale(13),
    fontWeight: "600",
    marginBottom: moderateScale(24),
  },
  appsSection: {
    marginBottom: moderateScale(30),
  },
  sectionHeader: {
    marginBottom: moderateScale(16),
    paddingLeft: moderateScale(4),
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
    marginBottom: moderateScale(4),
  },
  sectionSubtitle: {
    color: "#666",
    fontSize: moderateScale(12),
    fontWeight: "700",
  },
});
