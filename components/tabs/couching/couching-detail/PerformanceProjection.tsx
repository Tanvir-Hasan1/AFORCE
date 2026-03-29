import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../../../constants/theme";

export const PerformanceProjection = () => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name="flash" size={20} color={COLORS.primary} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>PERFORMANCE PROJECTION</Text>
        <Text style={styles.value}>
          Hydration Score Impact:{" "}
          <Text style={styles.highlight}>+8 points</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    marginHorizontal: moderateScale(20),
    marginBottom: moderateScale(24),
    borderWidth: 1,
    borderColor: "#222",
    alignItems: "center",
  },
  iconContainer: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(12),
    backgroundColor: "#1A1C00",
    alignItems: "center",
    justifyContent: "center",
    marginRight: moderateScale(16),
  },
  textContainer: { flex: 1 },
  label: {
    color: "#888",
    fontSize: moderateScale(11),
    fontWeight: "900",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  value: { color: "white", fontSize: moderateScale(16), fontWeight: "bold" },
  highlight: { color: COLORS.primary },
});
