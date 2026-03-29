import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface BadgeProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}

export function ProductBadges() {
  const badges: BadgeProps[] = [
    { icon: "flash", label: "INSTANT ENERGY" },
    { icon: "water", label: "RAPID REHYDRATION" },
    { icon: "list", label: "0 SUGAR" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {badges.map((badge, index) => (
          <View key={index} style={styles.badge}>
            <Ionicons name={badge.icon} size={moderateScale(14)} color={COLORS.primary} />
            <Text style={styles.label}>{badge.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(16),
  },
  scrollContent: {
    gap: moderateScale(10),
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(14),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: "#222",
    gap: moderateScale(8),
  },
  label: {
    color: "#DDD",
    fontSize: moderateScale(11),
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});
