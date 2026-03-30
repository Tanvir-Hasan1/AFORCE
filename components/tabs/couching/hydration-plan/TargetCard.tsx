import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

export function TargetCard() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.label}>DAILY HYDRATION TARGET</Text>
          <Text style={styles.targetValue}>2.7<Text style={styles.unit}>L</Text></Text>
        </View>
        
        <View style={styles.progressCircle}>
          <View style={styles.circleInner}>
            <Text style={styles.percentText}>65%</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.progressRow}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "65%" }]} />
        </View>
        <View style={styles.progressLabels}>
          <Text style={styles.consumed}>1.75L consumed</Text>
          <Text style={styles.remaining}>0.95L remaining</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(24),
    marginBottom: moderateScale(30),
    borderWidth: 1,
    borderColor: "#111",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(24),
  },
  label: {
    color: "#444",
    fontSize: moderateScale(11),
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: moderateScale(8),
  },
  targetValue: {
    color: COLORS.primary,
    fontSize: moderateScale(48),
    fontWeight: "900",
  },
  unit: {
    fontSize: moderateScale(24),
  },
  progressCircle: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    borderWidth: moderateScale(8),
    borderColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  circleInner: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: moderateScale(8),
    borderColor: COLORS.primary,
    borderRadius: moderateScale(40),
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "45deg" }],
  },
  percentText: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "900",
    transform: [{ rotate: "-45deg" }],
  },
  progressRow: {
    marginTop: moderateScale(10),
  },
  progressBar: {
    height: moderateScale(8),
    backgroundColor: "#111",
    borderRadius: moderateScale(4),
    marginBottom: moderateScale(8),
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(4),
  },
  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  consumed: {
    color: "#666",
    fontSize: moderateScale(12),
    fontWeight: "700",
  },
  remaining: {
    color: "#666",
    fontSize: moderateScale(12),
    fontWeight: "700",
  },
});
