import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export function DeliveryInfoCard() {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Ionicons name="bus-outline" size={moderateScale(20)} color={COLORS.primary} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Next delivery June 10</Text>
        <Text style={styles.subtext}>123 Hydration Way, Wellness City</Text>
      </View>
      
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    padding: moderateScale(16),
    marginBottom: moderateScale(30),
    borderWidth: 1,
    borderColor: "#111",
  },
  iconWrapper: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(12),
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginRight: moderateScale(16),
    borderWidth: 1,
    borderColor: "#222",
  },
  content: {
    flex: 1,
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(15),
    fontWeight: "900",
    marginBottom: moderateScale(4),
  },
  subtext: {
    color: "#666",
    fontSize: moderateScale(12),
    fontWeight: "600",
  },
  editBtn: {
    paddingHorizontal: moderateScale(12),
  },
  editText: {
    color: COLORS.primary,
    fontSize: moderateScale(14),
    fontWeight: "900",
  },
});
