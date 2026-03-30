import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

const OPTIONS = ["Low", "Medium", "High"];

export function FrequencySelector() {
  const [selected, setSelected] = useState("High");

  return (
    <View style={styles.container}>
      {OPTIONS.map((option) => {
        const isActive = selected === option;
        return (
          <TouchableOpacity
            key={option}
            style={[styles.option, isActive && styles.activeOption]}
            onPress={() => setSelected(option)}
            activeOpacity={0.8}
          >
            <Text style={[styles.optionText, isActive && styles.activeText]}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#161616",
    borderRadius: moderateScale(16),
    padding: moderateScale(6),
    gap: moderateScale(4),
  },
  option: {
    flex: 1,
    height: moderateScale(48),
    borderRadius: moderateScale(12),
    alignItems: "center",
    justifyContent: "center",
  },
  activeOption: {
    backgroundColor: COLORS.primary,
  },
  optionText: {
    color: "#666",
    fontSize: moderateScale(14),
    fontWeight: "700",
  },
  activeText: {
    color: "#000",
    fontWeight: "900",
  },
});
