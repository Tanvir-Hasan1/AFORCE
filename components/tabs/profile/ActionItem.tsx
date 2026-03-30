import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface ActionItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtext: string;
  status?: string;
  onPress?: () => void;
}

export function ActionItem({ icon, title, subtext, status, onPress }: ActionItemProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={moderateScale(20)} color={COLORS.primary} />
      </View>
      
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          {status && <Text style={styles.status}>{status}</Text>}
        </View>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>
      
      <Ionicons name="chevron-forward" size={moderateScale(20)} color="#333" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(16),
    marginHorizontal: moderateScale(20),
    marginBottom: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1A1A1A",
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
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: moderateScale(4),
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "900",
  },
  status: {
    color: COLORS.primary,
    fontSize: moderateScale(11),
    fontWeight: "900",
    letterSpacing: 0.5,
    marginRight: moderateScale(10),
  },
  subtext: {
    color: "#666",
    fontSize: moderateScale(12),
    fontWeight: "600",
    lineHeight: moderateScale(16),
  },
});
