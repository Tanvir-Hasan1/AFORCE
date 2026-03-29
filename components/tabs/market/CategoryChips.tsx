import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../../constants/theme";

const CATEGORIES = [
  "PERFORMANCE FUELS",
  "ELECTROLYTES",
  "ENERGY",
  "GEAR",
  "ACCESSORIES"
];

export function CategoryChips() {
  const [selected, setSelected] = useState("PERFORMANCE FUELS");

  return (
    <View style={styles.outerContainer}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {CATEGORIES.map((cat) => {
          const isActive = selected === cat;
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelected(cat)}
              style={[
                styles.chip,
                isActive && styles.activeChip
              ]}
              activeOpacity={0.8}
            >
              <Text 
                style={[
                  styles.chipText,
                  isActive && styles.activeChipText
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: moderateScale(16),
  },
  container: {
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(10),
  },
  chip: {
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(25),
    backgroundColor: "#111", // Dark chip
    borderWidth: 1,
    borderColor: "#222",
  },
  activeChip: {
    backgroundColor: COLORS.primary, // Neon Green
    borderColor: COLORS.primary,
  },
  chipText: {
    color: "#888",
    fontSize: moderateScale(11),
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  activeChipText: {
    color: "#000",
  },
});
