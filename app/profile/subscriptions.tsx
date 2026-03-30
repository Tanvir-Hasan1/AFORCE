import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";
import { CustomHeader } from "@/components/ui/CustomHeader";
import { CurrentPlanCard } from "@/components/profile/subscriptions/CurrentPlanCard";
import { DeliveryInfoCard } from "@/components/profile/subscriptions/DeliveryInfoCard";
import { BundleDiscovery } from "@/components/profile/subscriptions/BundleDiscovery";

export default function SubscriptionsScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Subscriptions" />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <CurrentPlanCard />
        <DeliveryInfoCard />
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Discover Bundles</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        
        <BundleDiscovery />
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
    paddingBottom: 40,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScale(30),
    marginBottom: moderateScale(16),
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
  },
  seeAll: {
    color: COLORS.primary,
    fontSize: moderateScale(14),
    fontWeight: "700",
  },
});
