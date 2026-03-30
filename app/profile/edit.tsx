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
            <Text style={styles.label}>Name</Text>
            <View style={styles.inputWrapper}>
              <TextInput 
                style={styles.input} 
                placeholder="Minnie" 
                placeholderTextColor="#666"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWrapper}>
              <TextInput 
                style={styles.input} 
                placeholder="minnie@gmail.com" 
                placeholderTextColor="#666"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <View style={[styles.inputWrapper, styles.rowInput]}>
              <TextInput 
                style={styles.inputFlex} 
                placeholder="28/11/2005" 
                placeholderTextColor="#666"
              />
              <Ionicons name="calendar-outline" size={20} color="#666" />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Country</Text>
            <View style={[styles.inputWrapper, styles.rowInput]}>
              <TextInput 
                style={styles.inputFlex} 
                placeholder="Mexico" 
                placeholderTextColor="#666"
              />
              <Ionicons name="caret-down" size={16} color="#666" />
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
    paddingHorizontal: moderateScale(25),
    paddingBottom: moderateScale(40),
  },
  avatarSection: {
    alignItems: "center",
    marginTop: moderateScale(20),
    marginBottom: moderateScale(30),
  },
  avatarWrapper: {
    position: "relative",
    marginBottom: moderateScale(12),
  },
  avatarPlaceholder: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
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
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: moderateScale(16),
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  changeText: {
    color: "#B0B0B0",
    fontSize: moderateScale(14),
    fontWeight: "600",
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
    fontWeight: "500",
    marginBottom: moderateScale(8),
    marginLeft: moderateScale(4),
  },
  inputWrapper: {
    backgroundColor: "#000000",
    borderRadius: moderateScale(28),
    borderWidth: 1,
    borderColor: "#333",
    height: moderateScale(56),
    justifyContent: "center",
    paddingHorizontal: moderateScale(20),
  },
  rowInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    color: "#FFF",
    fontSize: moderateScale(16),
    width: "100%",
  },
  inputFlex: {
    flex: 1,
    color: "#FFF",
    fontSize: moderateScale(16),
  },
  saveBtn: {
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
  saveText: {
    color: "#000",
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
});
