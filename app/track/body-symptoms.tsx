import React from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../constants/theme";
import { CustomHeader } from "../../components/ui/CustomHeader";
import { SymptomScoreCard } from "../../components/tabs/home/hydration-control-center/body-symptoms/SymptomScoreCard";
import { RiskWarningCard } from "../../components/tabs/home/hydration-control-center/body-symptoms/RiskWarningCard";
import { SymptomToggleList } from "../../components/tabs/home/hydration-control-center/body-symptoms/SymptomToggleList";
import { ThirstLevelSlider } from "../../components/tabs/home/hydration-control-center/body-symptoms/ThirstLevelSlider";

export default function BodySymptomsScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Body Symptoms" />
      
      <ScrollView 
        contentContainerStyle={styles.content} 
        showsVerticalScrollIndicator={false}
      >
        <SymptomScoreCard />
        <RiskWarningCard />
        <SymptomToggleList />
        <ThirstLevelSlider />
      </ScrollView>

      {/* Fixed Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.mainBtn} activeOpacity={0.8}>
          <Text style={styles.mainBtnText}>Update Hydration Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: moderateScale(20),
    paddingBottom: moderateScale(140),
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: moderateScale(20),
    backgroundColor: COLORS.background,
    paddingBottom: moderateScale(40),
  },
  mainBtn: {
    backgroundColor: COLORS.primary, // Neon Green
    borderRadius: moderateScale(16),
    paddingVertical: moderateScale(20),
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  mainBtnText: {
    color: "#000000",
    fontSize: moderateScale(18),
    fontWeight: "800",
  },
});
