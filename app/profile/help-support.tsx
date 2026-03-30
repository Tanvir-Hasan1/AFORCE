import React from "react";
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
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
          contentFit="contain"
        />

        <Text style={styles.subtitle}>Hello, how can we assist you?</Text>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Title</Text>
            <View style={styles.inputWrapper}>
              <TextInput 
                style={styles.input} 
                placeholder="Enter the title of your issue" 
                placeholderTextColor="#666"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Write in below box</Text>
            <View style={[styles.inputWrapper, styles.messageWrapper]}>
              <TextInput 
                style={styles.input} 
                placeholder="Write here..." 
                placeholderTextColor="#666"
                multiline
                numberOfLines={10}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
          <Text style={styles.submitText}>SEND</Text>
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
    paddingHorizontal: moderateScale(25),
    paddingBottom: 40,
  },
  heroImage: {
    width: "100%",
    height: moderateScale(220),
    alignSelf: "center",
    marginTop: moderateScale(10),
    marginBottom: moderateScale(40),
  },
  subtitle: {
    color: "#B0B0B0",
    fontSize: moderateScale(16),
    textAlign: "center",
    marginBottom: moderateScale(40),
  },
  form: {
    marginBottom: moderateScale(40),
  },
  inputGroup: {
    marginBottom: moderateScale(20),
  },
  label: {
    color: "#B0B0B0",
    fontSize: moderateScale(14),
    fontWeight: "600",
    marginBottom: moderateScale(8),
  },
  inputWrapper: {
    backgroundColor: "#000000",
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: "#333",
    height: moderateScale(56),
    justifyContent: "center",
    paddingHorizontal: moderateScale(16),
  },
  messageWrapper: {
    height: moderateScale(160),
    paddingVertical: moderateScale(12),
    alignItems: "flex-start",
  },
  input: {
    color: "#FFF",
    fontSize: moderateScale(14),
    width: "100%",
    textAlignVertical: "top",
  },
  submitBtn: {
    backgroundColor: COLORS.primary,
    height: moderateScale(56),
    borderRadius: moderateScale(28),
    alignItems: "center",
    justifyContent: "center",
    // Premium Neon Glow
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  submitText: {
    color: "#000",
    fontSize: moderateScale(18),
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
