import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

interface StatProps {
  label: string;
  value: string;
  unit?: string;
}

function StatCard({ label, value, unit }: StatProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueRow}>
        <Text style={styles.value}>{value}</Text>
        {unit && <Text style={styles.unit}>{unit}</Text>}
      </View>
    </View>
  );
}

export function ProfileStatsRow() {
  return (
    <View style={styles.container}>
      <StatCard label="AVG INTAKE" value="2.4" unit="L" />
      <StatCard label="FOCUS SCORE" value="82" />
      <StatCard label="CURR STREAK" value="7" unit="DAYS" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10), // Reduced for better card width
    marginBottom: moderateScale(24),
  },
  card: {
    flex: 1,
    backgroundColor: "#111",
    borderRadius: moderateScale(20),
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(8),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: moderateScale(4),
    borderWidth: 1,
    borderColor: "#1A1A1A",
  },
  label: {
    color: "#666",
    fontSize: moderateScale(9),
    fontWeight: "900",
    marginBottom: moderateScale(8),
    letterSpacing: 0.5,
    textAlign: "center",
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    color: COLORS.primary,
    fontSize: moderateScale(20),
    fontWeight: "900",
    textAlign: "center",
  },
  unit: {
    color: COLORS.primary,
    fontSize: moderateScale(10),
    fontWeight: "900",
    marginLeft: 2,
  },
});
