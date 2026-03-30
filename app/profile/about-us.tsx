import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { CustomHeader } from "@/components/ui/CustomHeader";

export default function AboutUsScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="About Us" />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Image 
          source={require("@/assets/images/OBJECT.svg")} 
          style={styles.heroImage}
          resizeMode="contain"
        />

        <View style={styles.content}>
          <Text style={styles.brandTitle}>Innovation in Every Drop</Text>
          <Text style={styles.description}>
            AForce is the next evolution in premium athletic hydration. We combine cutting-edge biometrics with alkaline science to ensure your body performs at its peak potential.
          </Text>

          <View style={styles.missionCard}>
            <View style={styles.missionHeader}>
              <Ionicons name="flash" size={moderateScale(24)} color={COLORS.primary} />
              <Text style={styles.missionTitle}>Our Vision</Text>
            </View>
            <Text style={styles.missionText}>
              To empower every athlete with the scientific data and hydration protocols required to achieve impossible milestones.
            </Text>
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>99.9%</Text>
              <Text style={styles.statLabel}>PURITY</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>150+</Text>
              <Text style={styles.statLabel}>PARTNERS</Text>
            </View>
          </View>
        </View>
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
    paddingBottom: 40,
  },
  heroImage: {
    width: "100%",
    height: moderateScale(220),
    alignSelf: "center",
    marginTop: moderateScale(20),
  },
  content: {
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(30),
  },
  brandTitle: {
    color: "#FFF",
    fontSize: moderateScale(28),
    fontWeight: "900",
    marginBottom: moderateScale(16),
  },
  description: {
    color: "#888",
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    fontWeight: "600",
    marginBottom: moderateScale(30),
  },
  missionCard: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(24),
    borderWidth: 1,
    borderColor: "#1A1A1A",
    marginBottom: moderateScale(30),
  },
  missionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(12),
    marginBottom: moderateScale(16),
  },
  missionTitle: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
  },
  missionText: {
    color: "#888",
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
    fontWeight: "600",
  },
  statsGrid: {
    flexDirection: "row",
    gap: moderateScale(16),
  },
  statItem: {
    flex: 1,
    backgroundColor: "#111",
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#222",
  },
  statValue: {
    color: COLORS.primary,
    fontSize: moderateScale(24),
    fontWeight: "900",
    marginBottom: moderateScale(4),
  },
  statLabel: {
    color: "#444",
    fontSize: moderateScale(10),
    fontWeight: "900",
    letterSpacing: 1,
  },
});
