import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../../../../constants/theme";

export function ProtocolCard() {
  return (
    <View style={styles.container}>
      <View style={styles.accentBar} />
      <View style={styles.headerRow}>
        <View style={styles.redDot} />
        <Text style={styles.headerTitle}>AForce Hydration Protocol</Text>
      </View>

      <Text style={styles.description}>
        Your hydration level appears low.{"\n"}Drink 12–16 oz of water with
        electrolytes.
      </Text>

      <View style={styles.fixBox}>
        <Text style={styles.fixLabel}>Immediate Fix</Text>
        <Text style={styles.fixText}>Drink 16 oz water + 1 AForce stick</Text>
      </View>

      <View style={styles.nextBox}>
        <View style={styles.nextTitleRow}>
          <Ionicons
            name="timer-outline"
            size={moderateScale(24)}
            color="#FF6F00"
          />
          <Text style={styles.nextLabel}>NEXT PROTOCOL</Text>
        </View>
        <Text style={styles.nextText}>
          Recovery Window: Recheck hydration in 30 minutes.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(24),
    marginBottom: moderateScale(100), // Spacing for footer button
  },
  accentBar: {
    // Actually using borderLeftColor instead
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(12),
  },
  redDot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: "#FF3B30",
    marginRight: moderateScale(10),
  },
  headerTitle: {
    color: COLORS.primary,
    fontSize: moderateScale(18),
    fontWeight: "800",
  },
  description: {
    color: COLORS.text,
    fontSize: moderateScale(14),
    fontWeight: "500",
    lineHeight: moderateScale(20),
    marginBottom: moderateScale(24),
  },
  fixBox: {
    backgroundColor: "#1A1A1A",
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    marginBottom: moderateScale(16),
  },
  fixLabel: {
    color: COLORS.textDim,
    fontSize: moderateScale(11),
    fontWeight: "600",
    marginBottom: moderateScale(6),
  },
  fixText: {
    color: COLORS.text,
    fontSize: moderateScale(15),
    fontWeight: "700",
  },
  nextBox: {
    backgroundColor: "#0A0E1A", // Slightly darker/tinted
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    borderLeftWidth: 4,
    borderLeftColor: "#FF6F00",
  },
  nextTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
    marginBottom: moderateScale(4),
  },
  nextLabel: {
    color: "#3498DB", // Blue-ish or Dimmed
    fontSize: moderateScale(10),
    fontWeight: "800",
    letterSpacing: 1,
  },
  nextText: {
    color: COLORS.text,
    fontSize: moderateScale(15),
    fontWeight: "600",
    lineHeight: moderateScale(22),
  },
});
