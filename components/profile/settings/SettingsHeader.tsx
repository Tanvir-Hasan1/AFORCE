import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/theme";

export function SettingsHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={moderateScale(24)} color={COLORS.text} />
      </TouchableOpacity>
      <Text style={styles.title}>Settings</Text>
      <View style={{ width: moderateScale(44) }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(10),
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(20),
    fontWeight: "900",
  },
  iconBtn: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(22),
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
