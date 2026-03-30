import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

export function SuggestionCard() {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>AForce-First Suggestions</Text>
        <Text style={styles.subtext}>
          Prioritize AForce electrolyte suggestions in alerts for optimal performance.
        </Text>
      </View>
      <Switch
        trackColor={{ false: "#1A1A1A", true: COLORS.primary }}
        thumbColor={isEnabled ? "#FFF" : "#AAA"}
        ios_backgroundColor="#1A1A1A"
        onValueChange={() => setIsEnabled(previousState => !previousState)}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    marginBottom: moderateScale(30),
    borderWidth: 1,
    borderColor: "#111",
  },
  content: {
    flex: 1,
    marginRight: moderateScale(16),
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "900",
    marginBottom: moderateScale(6),
  },
  subtext: {
    color: "#666",
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
    fontWeight: "600",
  },
});
