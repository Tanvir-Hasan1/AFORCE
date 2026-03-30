import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export function WearableCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons name="watch-outline" size={moderateScale(24)} color={COLORS.primary} />
        </View>
        <Text style={styles.description}>
          Track your hydration directly from your wrist for real-time updates.
        </Text>
      </View>
      
      <TouchableOpacity style={styles.connectBtn} activeOpacity={0.8}>
        <Text style={styles.connectText}>+ Connect Device</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(24),
    borderWidth: 1,
    borderColor: "#111",
    marginBottom: moderateScale(30),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20),
    marginBottom: moderateScale(24),
  },
  iconCircle: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(28),
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#222",
  },
  description: {
    flex: 1,
    color: "#888",
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
    fontWeight: "600",
  },
  connectBtn: {
    width: "100%",
    height: moderateScale(56),
    borderRadius: moderateScale(16),
    borderWidth: 1.5,
    borderColor: "#1A1A1A",
    backgroundColor: "#050505",
    alignItems: "center",
    justifyContent: "center",
  },
  connectText: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "900",
    letterSpacing: 0.5,
  },
});
