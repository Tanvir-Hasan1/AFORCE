import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../../../../constants/theme";

const LEVELS = [
  { id: 1, label: "Not thirsty" },
  { id: 2, label: "Slight thirst" },
  { id: 3, label: "Moderate thirst" },
  { id: 4, label: "Very thirsty" },
  { id: 5, label: "Extremely thirsty" },
];

export function ThirstLevelSlider() {
  const [level, setLevel] = useState(3);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>THIRST LEVEL</Text>
        <Text style={styles.levelText}>Level {level}</Text>
      </View>

      <View style={styles.sliderContainer}>
        {/* Track */}
        <View style={styles.track}>
          <View style={[styles.trackFill, { width: `${(level - 1) * 25}%` }]} />
        </View>

        {/* Dots & Interaction */}
        <View style={styles.dotsRow}>
          {LEVELS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.dotTouchArea}
              onPress={() => setLevel(item.id)}
            >
              <View 
                style={[
                  styles.dot, 
                  level === item.id && styles.activeDot,
                  level > item.id && { backgroundColor: COLORS.primary }
                ]} 
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Thumb (Visual) */}
        <View 
          style={[
            styles.thumb, 
            { left: `${(level - 1) * 25}%`, marginLeft: moderateScale(-10) }
          ]} 
        />
      </View>

      <View style={styles.labelsRow}>
        {LEVELS.map((item) => (
          <Text 
            key={item.id} 
            style={[styles.label, level === item.id && styles.activeLabel]}
          >
            {item.label}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(32),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(24),
  },
  title: {
    color: COLORS.textDim,
    fontSize: moderateScale(11),
    fontWeight: "800",
    letterSpacing: 1,
  },
  levelText: {
    color: COLORS.primary,
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  sliderContainer: {
    height: moderateScale(40),
    justifyContent: "center",
    marginBottom: moderateScale(8),
  },
  track: {
    height: moderateScale(4),
    backgroundColor: "#1A1A1A",
    borderRadius: 2,
    position: "absolute",
    left: 10,
    right: 10,
  },
  trackFill: {
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    zIndex: 2,
  },
  dotTouchArea: {
    width: moderateScale(40),
    height: moderateScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: moderateScale(6),
    height: moderateScale(6),
    borderRadius: 3,
    backgroundColor: "#333",
  },
  activeDot: {
    backgroundColor: COLORS.primary,
    width: moderateScale(8),
    height: moderateScale(8),
  },
  thumb: {
    position: "absolute",
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.primary,
    borderWidth: 4,
    borderColor: "#000",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 3,
    top: moderateScale(10),
  },
  labelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: COLORS.textDim,
    fontSize: moderateScale(9),
    width: moderateScale(60),
    textAlign: "center",
    fontWeight: "600",
  },
  activeLabel: {
    color: COLORS.text,
  },
});
