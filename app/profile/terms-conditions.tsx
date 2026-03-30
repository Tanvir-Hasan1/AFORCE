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

export default function TermsConditionsScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Terms & Conditions" />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.introSection}>
          <Text style={styles.lastUpdated}>Last updated: March 30, 2026</Text>
          <Text style={styles.introText}>
            Please read these terms and conditions carefully before using the AForce application. By using our services, you agree to be bound by these terms.
          </Text>
        </View>

        <PolicySection 
          title="1. Acceptance of Terms" 
          content="By accessing or using the AForce application, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, you must immediately cease using the application." 
        />

        <PolicySection 
          title="2. Health Disclaimer" 
          content="AForce provides hydration recommendations based on biometric data. These suggestions are not medical advice. Consult with a qualified healthcare professional before starting any new hydration or electrolyte protocol, especially if you have underlying medical conditions." 
        />

        <PolicySection 
          title="3. User Accounts" 
          content="You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary." 
        />

        <PolicySection 
          title="4. Subscription & Billing" 
          content="Subscriptions provide access to premium coaching and analytic features. Payments are processed through secure gateways. You may cancel your subscription at any time via the profile settings." 
        />

        <PolicySection 
          title="5. Intellectual Property" 
          content="All content, features, and functionality of the AForce application are the exclusive property of AForce and are protected by international copyright and trademark laws." 
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
