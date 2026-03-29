import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../../../../constants/theme";
import Svg, { Circle } from "react-native-svg";

export function SymptomScoreCard() {
  const score = 68;
  const radius = moderateScale(80);
  const strokeWidth = moderateScale(12);
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.labelText}>AFORCE HYDRATION SCORE</Text>
        <Text style={styles.scoreText}>
          {score}<Text style={styles.totalText}> / 100</Text>
        </Text>
      </View>

      <View style={styles.ringContainer}>
        <Svg height={radius * 2} width={radius * 2} style={styles.svg}>
          {/* Background Circle */}
          <Circle
            stroke="#1A1A1A"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress Circle */}
          <Circle
            stroke={COLORS.primary}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        </Svg>
        <View style={styles.centerTextContainer}>
          <Text style={styles.centerScoreText}>{score}</Text>
          <Text style={styles.centerTotalText}>/ 100</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerLabel}>62% AFORCE HYDRATION SCORE</Text>
        <Text style={[styles.footerLabel, { color: COLORS.primary }]}>MODERATE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(24),
    marginBottom: moderateScale(16),
  },
  header: {
    alignItems: "flex-end",
    marginBottom: moderateScale(24),
  },
  labelText: {
    color: COLORS.textDim,
    fontSize: moderateScale(11),
    fontWeight: "700",
    marginBottom: moderateScale(4),
  },
  scoreText: {
    color: COLORS.primary,
    fontSize: moderateScale(24),
    fontWeight: "bold",
  },
  totalText: {
    color: COLORS.textDim,
    fontSize: moderateScale(14),
  },
  ringContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: moderateScale(24),
  },
  svg: {
    transform: [{ rotate: "0deg" }],
  },
  centerTextContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  centerScoreText: {
    color: COLORS.text,
    fontSize: moderateScale(42),
    fontWeight: "bold",
  },
  centerTotalText: {
    color: COLORS.textDim,
    fontSize: moderateScale(18),
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLabel: {
    color: COLORS.textDim,
    fontSize: moderateScale(10),
    fontWeight: "700",
  },
});
