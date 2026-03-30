import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface MilestoneProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  isActive?: boolean;
}

function MilestoneItem({ icon, label, isActive }: MilestoneProps) {
  return (
    <View style={styles.milestoneWrapper}>
      <View style={[styles.milestoneIcon, isActive && styles.activeMilestone]}>
        <Ionicons 
          name={icon} 
          size={moderateScale(24)} 
          color={isActive ? COLORS.primary : "#444"} 
        />
      </View>
      <Text style={[styles.milestoneLabel, isActive && styles.activeLabel]}>{label}</Text>
    </View>
  );
}

export function MilestonesSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Milestones</Text>
        <TouchableOpacity>
          <Text style={styles.archiveBtn}>VIEW ARCHIVE</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <MilestoneItem icon="water" label="H2O MASTER" isActive />
        <MilestoneItem icon="sunny" label="EARLY BIRD" />
        <MilestoneItem icon="trophy" label="WEEKEND PRO" />
        <MilestoneItem icon="flash" label="SPRINT" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(20),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
  },
  archiveBtn: {
    color: COLORS.primary,
    fontSize: moderateScale(11),
    fontWeight: "900",
    letterSpacing: 1,
  },
  scrollContent: {
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(24),
  },
  milestoneWrapper: {
    alignItems: "center",
  },
  milestoneIcon: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: 32,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: moderateScale(12),
    borderWidth: 2,
    borderColor: "#1A1A1A",
  },
  activeMilestone: {
    borderColor: COLORS.primary,
    backgroundColor: "#0D0D0D",
  },
  milestoneLabel: {
    color: "#444",
    fontSize: moderateScale(9),
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  activeLabel: {
    color: "#FFF",
  },
});
