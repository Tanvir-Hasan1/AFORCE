import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";
import { CustomHeader } from "@/components/ui/CustomHeader";

interface PolicySectionProps {
  title: string;
  content: string;
}

function PolicySection({ title, content }: PolicySectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionContent}>{content}</Text>
    </View>
  );
}

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Privacy Policy" />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.introSection}>
          <Text style={styles.lastUpdated}>Last updated: March 30, 2026</Text>
          <Text style={styles.introText}>
            Your privacy is of extreme importance to AForce. This document outlines the types of data we collect and how we handle it.
          </Text>
        </View>

        <PolicySection 
          title="1. Personal Data Collection" 
          content="We collect biometric data (weight, age, gender) and health-related inputs (step count, heart rate) to calculate accurate hydration protocols. This data is stored securely and never shared with third parties." 
        />

        <PolicySection 
          title="2. Mobile Device Permissions" 
          content="AForce requires access to specific mobile device features, including HealthKit (on iOS) or Google Fit (on Android), to automatically sync your physical activity logs for precision hydration monitoring." 
        />

        <PolicySection 
          title="3. Data Protection" 
          content="We implement robust encryption and security measures to protect your information against unauthorized access, alteration, or destruction. Your health data is treated with clinical-grade privacy standards." 
        />

        <PolicySection 
          title="4. User Rights" 
          content="You have the right to access, modify, or delete your personal data at any time through the profile settings. You can also export your hydration logs for personal use or medical review." 
        />

        <PolicySection 
          title="5. Policy Updates" 
          content="We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page." 
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: 40,
  },
  introSection: {
    marginVertical: moderateScale(30),
  },
  lastUpdated: {
    color: COLORS.primary,
    fontSize: moderateScale(12),
    fontWeight: "900",
    marginBottom: moderateScale(12),
  },
  introText: {
    color: "#888",
    fontSize: moderateScale(15),
    lineHeight: moderateScale(22),
    fontWeight: "600",
  },
  section: {
    marginBottom: moderateScale(32),
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
    marginBottom: moderateScale(12),
  },
  sectionContent: {
    color: "#666",
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
    fontWeight: "600",
  },
});
