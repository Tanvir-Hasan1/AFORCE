import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../../../../constants/theme";

const URINE_COLORS = [
  { id: 1, color: "#FFF7D1" },
  { id: 2, color: "#FFE87A" },
  { id: 3, color: "#FFD95A" },
  { id: 4, color: "#FFC23C" },
  { id: 5, color: "#FF9F29" },
  { id: 6, color: "#E68A00" },
  { id: 7, color: "#A6611A" },
  { id: 8, id_label: "8", color: "#734212" },
];

export function ColorGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>
        Select the color that most closely matches your urine.
      </Text>
      <Text style={styles.headerSubtitle}>
        This helps estimate your hydration level and improve your hydration
        score.
      </Text>

      <View style={styles.grid}>
        {URINE_COLORS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.colorBox,
              { backgroundColor: item.color },
              selected === item.id && styles.selectedBox,
            ]}
            onPress={() => setSelected(item.id)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.colorLabel,
                { color: item.id > 4 ? "#FFFFFF80" : "#00000080" },
              ]}
            >
              {item.id}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(32),
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: moderateScale(17),
    fontWeight: "700",
    marginBottom: moderateScale(8),
  },
  headerSubtitle: {
    color: COLORS.textDim,
    fontSize: moderateScale(14),
    fontWeight: "500",
    lineHeight: moderateScale(20),
    marginBottom: moderateScale(24),
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: moderateScale(12),
    justifyContent: "space-between",
  },
  colorBox: {
    width: "20%",
    aspectRatio: 1,
    borderRadius: moderateScale(12),
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: moderateScale(8),
  },
  selectedBox: {
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  colorLabel: {
    fontSize: moderateScale(10),
    fontWeight: "800",
  },
});
