import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface AlertToggleProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  isLast?: boolean;
}

export function AlertToggle({ icon, title, isLast }: AlertToggleProps) {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.iconWrapper}>
          <Ionicons name={icon} size={moderateScale(18)} color={COLORS.primary} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Switch
          trackColor={{ false: "#1A1A1A", true: COLORS.primary }}
          thumbColor={isEnabled ? "#FFF" : "#AAA"}
          ios_backgroundColor="#1A1A1A"
          onValueChange={() => setIsEnabled(previousState => !previousState)}
          value={isEnabled}
        />
      </View>
      {!isLast && <View style={styles.divider} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: moderateScale(72),
  },
  iconWrapper: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginRight: moderateScale(16),
  },
  title: {
    flex: 1,
    color: "#FFF",
    fontSize: moderateScale(15),
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: "#1A1A1A",
    width: "100%",
  },
});
