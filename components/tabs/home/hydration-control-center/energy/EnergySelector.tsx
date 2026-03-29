import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../../constants/theme";

const ENERGY_LEVELS = [
  { id: "depleted", name: "DEPLETED", icon: "battery-dead-outline" },
  { id: "normal", name: "NORMAL", icon: "battery-charging-outline" },
  { id: "peak", name: "PEAK", icon: "flash-outline" },
];

export function EnergySelector() {
  const [selected, setSelected] = useState("normal");

  return (
    <View style={styles.container}>
      <Text style={styles.statusLabel}>CURRENT STATUS</Text>
      <Text style={styles.mainTitle}>SELECT ENERGY</Text>

      <View style={styles.selectorRow}>
        {ENERGY_LEVELS.map((level) => {
          const isActive = selected === level.id;
          return (
            <TouchableOpacity
              key={level.id}
              style={[styles.box, isActive && styles.activeBox]}
              onPress={() => setSelected(level.id)}
              activeOpacity={0.8}
            >
              <View style={styles.iconContainer}>
                <Ionicons
                  name={level.icon as any}
                  size={moderateScale(32)}
                  color={isActive ? "#000000" : COLORS.textDim}
                />
              </View>
              <View style={styles.labelContainer}>
                <Text style={[styles.boxLabel, isActive && styles.activeBoxLabel]}>
                  {level.name}
                </Text>
                {isActive && <View style={styles.underline} />}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.footerNote}>You're maintaining good balance.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: moderateScale(40),
  },
  statusLabel: {
    color: COLORS.textDim,
    fontSize: moderateScale(11),
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: moderateScale(8),
  },
  mainTitle: {
    color: COLORS.text,
    fontSize: moderateScale(36),
    fontWeight: "900",
    marginBottom: moderateScale(100),
  },
  selectorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(100),
  },
  box: {
    width: moderateScale(90),
    height: moderateScale(110),
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(12),
  },
  activeBox: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  iconContainer: {
    marginBottom: moderateScale(20),
  },
  labelContainer: {
    alignItems: "center",
  },
  boxLabel: {
    color: COLORS.textDim,
    fontSize: moderateScale(10),
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  activeBoxLabel: {
    color: "#000000",
  },
  underline: {
    height: 2,
    backgroundColor: "#000000",
    width: "100%",
    marginTop: 2,
  },
  footerNote: {
    color: COLORS.textDim,
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
});
