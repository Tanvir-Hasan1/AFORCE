import React from "react";
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";
import { CustomHeader } from "@/components/ui/CustomHeader";

export default function HelpSupportScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Help & Support" />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <Image 
          source={require("@/assets/images/OBJECT.svg")} 
          style={styles.heroImage}
          resizeMode="contain"
        />

        <Text style={styles.title}>How can we help you?</Text>
        <Text style={styles.subtitle}>
          Have a question or need technical assistance? Fill out the form below.
        </Text>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>ISSUE TYPE</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputText}>Technical Support</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>MESSAGE</Text>
            <View style={[styles.inputWrapper, styles.messageWrapper]}>
              <TextInput 
                style={styles.input} 
                placeholder="Describe your issue here..." 
                placeholderTextColor="#444"
                multiline
                numberOfLines={5}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
          <Text style={styles.submitText}>Submit Ticket</Text>
        </TouchableOpacity>
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
  heroImage: {
    width: "100%",
    height: moderateScale(200),
    alignSelf: "center",
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(24),
    fontWeight: "900",
    textAlign: "center",
    marginBottom: moderateScale(8),
  },
  subtitle: {
    color: "#666",
    fontSize: moderateScale(14),
    textAlign: "center",
    lineHeight: moderateScale(20),
    marginBottom: moderateScale(40),
    paddingHorizontal: moderateScale(20),
  },
  form: {
    marginBottom: moderateScale(30),
  },
  inputGroup: {
    marginBottom: moderateScale(24),
  },
  label: {
    color: "#666",
    fontSize: moderateScale(11),
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: moderateScale(10),
  },
  inputWrapper: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1A1A1A",
    height: moderateScale(56),
    justifyContent: "center",
    paddingHorizontal: moderateScale(20),
  },
  inputText: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  messageWrapper: {
    height: moderateScale(150),
    paddingVertical: moderateScale(16),
    alignItems: "flex-start",
  },
  input: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "600",
    width: "100%",
    textAlignVertical: "top",
  },
  submitBtn: {
    backgroundColor: COLORS.primary,
    height: moderateScale(64),
    borderRadius: moderateScale(32),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  submitText: {
    color: "#000",
    fontSize: moderateScale(18),
    fontWeight: "900",
  },
});
