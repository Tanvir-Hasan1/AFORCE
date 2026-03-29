import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

interface Ingredient {
  value: string;
  name: string;
}

export function IngredientGrid() {
  const ingredients: Ingredient[] = [
    { value: "1500mg", name: "ELECTROLYTES" },
    { value: "500mg", name: "MAGNESIUM" },
    { value: "250mg", name: "VITAMIN C" },
    { value: "BioPerine", name: "ABSORPTION" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={styles.line} />
        <Text style={styles.title}>KEY INGREDIENTS</Text>
      </View>
      
      <View style={styles.grid}>
        {ingredients.map((ing, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.value}>{ing.value}</Text>
            <Text style={styles.name}>{ing.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(16),
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(16),
  },
  line: {
    width: 4,
    height: 18,
    backgroundColor: COLORS.primary,
    marginRight: moderateScale(8),
  },
  title: {
    color: "#DDD",
    fontSize: moderateScale(13),
    fontWeight: "900",
    letterSpacing: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: moderateScale(12),
  },
  box: {
    width: "48%",
    backgroundColor: "#0D0D0D",
    padding: moderateScale(16),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: "#1A1A1A",
  },
  value: {
    color: COLORS.primary,
    fontSize: moderateScale(18),
    fontWeight: "900",
    marginBottom: moderateScale(4),
  },
  name: {
    color: "#555",
    fontSize: moderateScale(10),
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
