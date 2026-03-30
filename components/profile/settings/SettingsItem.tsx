import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface SettingsItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress?: () => void;
}

export function SettingsItem({ icon, title, onPress }: SettingsItemProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Ionicons name={icon} size={moderateScale(20)} color={COLORS.primary} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward" size={moderateScale(20)} color="#333" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    padding: moderateScale(16),
    marginBottom: moderateScale(12),
    borderWidth: 1,
    borderColor: "#111",
  },
  iconWrapper: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(12),
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginRight: moderateScale(16),
    borderWidth: 1,
    borderColor: "#222",
  },
  title: {
    flex: 1,
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "700",
  },
});
