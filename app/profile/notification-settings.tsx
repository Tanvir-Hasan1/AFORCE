import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/theme";
import { FrequencySelector } from "@/components/profile/notification-settings/FrequencySelector";
import { SuggestionCard } from "@/components/profile/notification-settings/SuggestionCard";
import { AlertToggle } from "@/components/profile/notification-settings/AlertToggle";

export default function NotificationSettingsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={moderateScale(24)} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Notification Settings</Text>
        <View style={{ width: moderateScale(44) }} />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.sectionLabel}>REMINDER FREQUENCY</Text>
        <FrequencySelector />

        <View style={{ height: moderateScale(30) }} />
        <SuggestionCard />

        <Text style={styles.sectionLabel}>SMART ALERTS</Text>
        <View style={styles.toggleCard}>
          <AlertToggle icon="fitness-outline" title="Post workout alerts" />
          <AlertToggle icon="thermometer-outline" title="Hot weather alerts" />
          <AlertToggle icon="warning-outline" title="Dehydration risk alerts" isLast />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
  },
  iconBtn: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(22),
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
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
    marginBottom: moderateScale(16),
  },
  toggleCard: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    borderWidth: 1,
    borderColor: "#111",
    overflow: "hidden",
  },
});
