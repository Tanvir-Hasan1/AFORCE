import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../../constants/theme";

const SYMPTOMS = [
  { id: "dry-mouth", name: "Dry mouth", icon: "water-outline", activeColor: COLORS.primary },
  { id: "headache", name: "Headache", icon: "person-outline", activeColor: "#3498DB" },
  { id: "muscle-cramps-1", name: "Muscle cramps", icon: "fitness-outline", activeColor: "#E74C3C" },
  { id: "muscle-cramps-2", name: "Muscle cramps", icon: "flash-outline", activeColor: "#F1C40F" },
  { id: "dizziness", name: "Dizziness", icon: "sync-outline", activeColor: "#9B59B6" },
  { id: "dark-urine", name: "Dark Urine", icon: "beaker-outline", activeColor: "#E67E22" },
];

export function SymptomToggleList() {
  const [activeSymptoms, setActiveSymptoms] = useState<string[]>(["dry-mouth"]);

  const toggleSymptom = (id: string) => {
    setActiveSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>SYMPTOMS</Text>
      <View style={styles.listContainer}>
        {SYMPTOMS.map((symptom) => {
          const isActive = activeSymptoms.includes(symptom.id);
          return (
            <View 
              key={symptom.id} 
              style={[
                styles.itemRow, 
                isActive && symptom.id === "dry-mouth" && styles.activeHighlight
              ]}
            >
              <View style={[styles.iconBox, isActive && { backgroundColor: symptom.activeColor }]}>
                <Ionicons 
                  name={symptom.icon as any} 
                  size={moderateScale(22)} 
                  color={isActive ? "#000000" : COLORS.textDim} 
                />
              </View>
              <Text style={styles.itemName}>{symptom.name}</Text>
              <Switch
                value={isActive}
                onValueChange={() => toggleSymptom(symptom.id)}
                trackColor={{ false: "#333", true: COLORS.primary }}
                thumbColor={isActive ? "#FFFFFF" : "#888"}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(32),
  },
  sectionTitle: {
    color: COLORS.textDim,
    fontSize: moderateScale(11),
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: moderateScale(16),
  },
  listContainer: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(12),
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(12),
    borderRadius: moderateScale(16),
    marginBottom: moderateScale(4),
  },
  activeHighlight: {
    backgroundColor: "#1A2A1A", // Dark green tint
    borderColor: COLORS.primary + "40",
    borderWidth: 1,
  },
  iconBox: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(12),
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    marginRight: moderateScale(16),
  },
  itemName: {
    flex: 1,
    color: COLORS.text,
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
});
