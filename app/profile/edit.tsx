import React from "react";
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { CustomHeader } from "@/components/ui/CustomHeader";

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <CustomHeader title="Edit Profile" />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={moderateScale(64)} color="#333" />
            </View>
            <TouchableOpacity style={styles.editBadge} activeOpacity={0.8}>
              <Ionicons name="camera" size={moderateScale(20)} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.changeText}>Change Profile Picture</Text>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>FULL NAME</Text>
            <View style={styles.inputWrapper}>
              <TextInput 
                style={styles.input} 
                placeholder="Alex Johnson" 
                placeholderTextColor="#444"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>EMAIL ADDRESS</Text>
            <View style={styles.inputWrapper}>
              <TextInput 
                style={styles.input} 
                placeholder="alex.j@example.com" 
                placeholderTextColor="#444"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>PHONE NUMBER</Text>
            <View style={styles.inputWrapper}>
              <TextInput 
                style={styles.input} 
                placeholder="+1 234 567 890" 
                placeholderTextColor="#444"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>BIO</Text>
            <View style={[styles.inputWrapper, styles.bioWrapper]}>
              <TextInput 
                style={[styles.input, styles.bioInput]} 
                placeholder="Elite athlete focused on optimal hydration." 
                placeholderTextColor="#444"
                multiline
                numberOfLines={3}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.saveBtn} activeOpacity={0.8}>
          <Text style={styles.saveText}>Save Changes</Text>
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
    paddingBottom: moderateScale(40),
  },
  avatarSection: {
    alignItems: "center",
    marginTop: moderateScale(30),
    marginBottom: moderateScale(40),
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: moderateScale(16),
  },
  avatarPlaceholder: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#222",
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: COLORS.background,
  },
  changeText: {
    color: COLORS.primary,
    fontSize: moderateScale(14),
    fontWeight: "700",
  },
  form: {
    marginBottom: moderateScale(40),
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
    marginLeft: moderateScale(4),
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
  input: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  bioWrapper: {
    height: moderateScale(100),
    paddingVertical: moderateScale(16),
    alignItems: "flex-start",
  },
  bioInput: {
    textAlignVertical: "top",
    width: "100%",
  },
  saveBtn: {
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
  saveText: {
    color: "#000",
    fontSize: moderateScale(18),
    fontWeight: "900",
  },
});
