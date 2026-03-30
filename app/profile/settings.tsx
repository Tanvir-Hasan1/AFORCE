import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/theme";
import { SettingsHeader } from "@/components/profile/settings/SettingsHeader";
import { SettingsItem } from "@/components/profile/settings/SettingsItem";

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <SettingsHeader />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.sectionLabel}>APP SYNC & CONNECTIVITY</Text>
        <View style={styles.itemsContainer}>
          <SettingsItem 
            icon="sync-outline" 
            title="App Integrations" 
            onPress={() => router.push('/profile/integrations')}
          />
        </View>

        <Text style={styles.sectionLabel}>INFORMATION & LEGAL</Text>
        
        <View style={styles.itemsContainer}>
          <SettingsItem 
            icon="notifications-outline" 
            title="Notification" 
            onPress={() => router.push('/profile/notification-settings')}
          />
          <SettingsItem 
            icon="receipt-outline" 
            title="Subscriptions" 
            onPress={() => router.push('/profile/subscriptions')}
          />
          <SettingsItem 
            icon="help-circle-outline" 
            title="Help & support" 
            onPress={() => router.push('/profile/help-support')}
          />
          <SettingsItem 
            icon="document-text-outline" 
            title="Terms & Conditions" 
            onPress={() => router.push('/profile/terms-conditions')}
          />
          <SettingsItem 
            icon="shield-checkmark-outline" 
            title="Privacy Policy" 
            onPress={() => router.push('/profile/privacy-policy')}
          />
          <SettingsItem 
            icon="information-circle-outline" 
            title="About Us" 
            onPress={() => router.push('/profile/about-us')}
          />
        </View>
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
    paddingHorizontal: moderateScale(20),
    paddingBottom: 40,
  },
  sectionLabel: {
    color: "#444",
    fontSize: moderateScale(11),
    fontWeight: "900",
    letterSpacing: 1.5,
    marginTop: moderateScale(30),
    marginBottom: moderateScale(20),
    textTransform: "uppercase",
  },
  itemsContainer: {
    gap: moderateScale(4),
  },
});
