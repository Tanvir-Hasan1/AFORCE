import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface InputRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  adjustment?: string;
  isLast?: boolean;
}

function InputRow({ icon, label, value, adjustment, isLast }: InputRowProps) {
  return (
    <View style={[styles.row, isLast && styles.lastRow]}>
      <View style={styles.left}>
        <Ionicons name={icon} size={moderateScale(18)} color="#888" />
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.value}>{value}</Text>
        {adjustment && <Text style={styles.adjustment}>{adjustment}</Text>}
      </View>
    </View>
  );
}

export function AlgorithmInputs() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Algorithm Inputs</Text>
      <View style={styles.card}>
        <InputRow icon="scale-outline" label="Weight" value="75kg" />
        <InputRow icon="flash-outline" label="Activity Level" value="Moderate" />
        <InputRow icon="thermometer-outline" label="Weather Adjustment" value="+0.3L" adjustment="+0.3L" />
        <InputRow icon="barbell-outline" label="Workout Impact" value="+0.5L" adjustment="+0.5L" />
        <InputRow icon="footsteps-outline" label="Steps Adjustment" value="+0.2L" adjustment="+0.2L" isLast />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(30),
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
    marginBottom: moderateScale(16),
    paddingHorizontal: moderateScale(4),
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#111",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(20),
    borderBottomWidth: 1,
    borderBottomColor: "#111",
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(12),
  },
  label: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "600",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(8),
  },
  value: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "900",
  },
  adjustment: {
    color: COLORS.primary,
    fontSize: moderateScale(14),
    fontWeight: "900",
  },
});
