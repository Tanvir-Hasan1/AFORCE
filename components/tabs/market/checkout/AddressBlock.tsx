import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export function AddressBlock() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shipping Address</Text>
        <TouchableOpacity>
          <Text style={styles.editBtnText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name="location" size={moderateScale(20)} color={COLORS.primary} />
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>Marcus Thorne</Text>
          <Text style={styles.addressLine}>88 Hydration Plaza, Floor 12</Text>
          <Text style={styles.addressLine}>San Francisco, CA 94105</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(24),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(16),
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "800",
  },
  editBtnText: {
    color: COLORS.primary,
    fontSize: moderateScale(14),
    fontWeight: "700",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    borderWidth: 1,
    borderColor: "#1A1A1A",
    alignItems: "center",
  },
  iconContainer: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(12),
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: moderateScale(16),
  },
  details: {
    flex: 1,
  },
  name: {
    color: "#FFF",
    fontSize: moderateScale(15),
    fontWeight: "700",
    marginBottom: moderateScale(4),
  },
  addressLine: {
    color: "#666",
    fontSize: moderateScale(13),
    fontWeight: "600",
    lineHeight: moderateScale(18),
  },
});
