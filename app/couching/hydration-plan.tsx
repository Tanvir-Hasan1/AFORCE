import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";
import { CustomHeader } from "@/components/ui/CustomHeader";
import { TargetCard } from "@/components/tabs/couching/hydration-plan/TargetCard";
import { AlgorithmInputs } from "@/components/tabs/couching/hydration-plan/AlgorithmInputs";
import { HydrationTimeline } from "@/components/tabs/couching/hydration-plan/HydrationTimeline";
import { Ionicons } from "@expo/vector-icons";

export default function HydrationPlanScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Hydration Plan" />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <TargetCard />
        <AlgorithmInputs />
        <HydrationTimeline />
      </ScrollView>

      {/* Tab Bar placeholder (as seen in screenshot) */}
      <View style={styles.tabBarPlaceholder}>
        <View style={styles.tabItem}>
          <Ionicons name="home" size={24} color={COLORS.primary} />
          <Text style={[styles.tabLabel, { color: COLORS.primary }]}>HOME</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="cart-outline" size={24} color="#666" />
          <Text style={styles.tabLabel}>MARKET</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="bulb" size={24} color="#666" />
          <Text style={styles.tabLabel}>COACHING</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="stats-chart-outline" size={24} color="#666" />
          <Text style={styles.tabLabel}>INSIGHTS</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text style={styles.tabLabel}>PROFILE</Text>
        </View>
      </View>
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
    paddingBottom: 120,
  },
  tabBarPlaceholder: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: moderateScale(80),
    backgroundColor: "rgba(0,0,0,0.95)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: moderateScale(20),
    borderTopWidth: 1,
    borderTopColor: "#111",
  },
  tabItem: {
    alignItems: "center",
    paddingTop: 10,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: "900",
    marginTop: 4,
    color: "#666",
  },
});
