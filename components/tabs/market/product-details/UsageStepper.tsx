import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../../../constants/theme";

interface Step {
  id: number;
  text: string;
}

export function UsageStepper() {
  const steps: Step[] = [
    { id: 1, text: "Mix 1 scoop with 12oz of cold water." },
    { id: 2, text: "Shake vigorously for 20 seconds until fully dissolved." },
    { id: 3, text: "Consume during or after intense physical activity." },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>USAGE INSTRUCTIONS</Text>
      <View style={styles.list}>
        {steps.map((step, index) => (
          <View key={step.id} style={styles.stepRow}>
            <View style={styles.nodeColumn}>
              <View style={styles.circle}>
                <Text style={styles.number}>{step.id}</Text>
              </View>
              {index < steps.length - 1 && <View style={styles.line} />}
            </View>
            <View style={styles.contentColumn}>
              <Text style={styles.contentText}>{step.text}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(16),
    padding: moderateScale(20),
    backgroundColor: "#0D0D0D",
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1A1A1A",
  },
  title: {
    color: "#DDD",
    fontSize: moderateScale(12),
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: moderateScale(16),
  },
  list: {
    paddingLeft: moderateScale(4),
  },
  stepRow: {
    flexDirection: "row",
    gap: moderateScale(16),
  },
  nodeColumn: {
    alignItems: "center",
  },
  circle: {
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: moderateScale(16),
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "#000",
    fontSize: moderateScale(14),
    fontWeight: "900",
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: "#1A1A1A",
    marginVertical: moderateScale(4),
  },
  contentColumn: {
    flex: 1,
    paddingBottom: moderateScale(20),
    justifyContent: "center",
  },
  contentText: {
    color: "#999",
    fontSize: moderateScale(13),
    fontWeight: "600",
    lineHeight: moderateScale(18),
  },
});
