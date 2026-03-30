import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export function IntegrationsInfo() {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={moderateScale(24)} color={COLORS.primary} style={styles.icon} />
      <Text style={styles.text}>
        Connecting your health apps allows AForce to adjust your daily water intake goals based on your activity levels and heart rate.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(212, 255, 0, 0.05)",
    padding: moderateScale(20),
    borderRadius: moderateScale(20),
    flexDirection: "row",
    gap: moderateScale(16),
    borderWidth: 1,
    borderColor: "rgba(212, 255, 0, 0.1)",
  },
  icon: {
    marginTop: 2,
  },
  text: {
    flex: 1,
    color: "#888",
    fontSize: moderateScale(13),
    lineHeight: moderateScale(22),
    fontWeight: "600",
  },
});
