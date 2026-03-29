import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

const TABS = ["All Orders", "In Progress", "Completed"];

export function HistoryTabs() {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {tab}
            </Text>
            {isActive && <View style={styles.indicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#1A1A1A",
    marginBottom: moderateScale(20),
  },
  tab: {
    flex: 1,
    paddingVertical: moderateScale(16),
    alignItems: "center",
  },
  tabText: {
    color: COLORS.textDim,
    fontSize: moderateScale(14),
    fontWeight: "600",
  },
  activeTabText: {
    color: COLORS.primary,
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 3,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
});
