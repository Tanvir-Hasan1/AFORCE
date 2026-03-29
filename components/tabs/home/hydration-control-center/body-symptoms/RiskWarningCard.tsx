import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../../constants/theme";

export function RiskWarningCard() {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons name="warning-outline" size={moderateScale(28)} color="#FFCC00" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>HYDRATION RISK: MODERATE</Text>
        <Text style={styles.subtitle}>
          Drink 12–16 oz of water or mix 1 AForce hydration stick.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFCC0015", // Semi-transparent yellow
    borderColor: "#FFCC0030",
    borderWidth: 1,
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    marginBottom: moderateScale(32),
    alignItems: "center",
  },
  iconBox: {
    marginRight: moderateScale(16),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#FFCC00",
    fontSize: moderateScale(13),
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: moderateScale(4),
  },
  subtitle: {
    color: COLORS.textDim,
    fontSize: moderateScale(12),
    fontWeight: "600",
    lineHeight: moderateScale(18),
  },
});
