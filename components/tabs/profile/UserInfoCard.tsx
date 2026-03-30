import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/theme";

export function UserInfoCard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarBorder}>
          <Image 
            source={{ uri: "https://i.pravatar.cc/300?u=alexjohnson" }} 
            style={styles.avatar} 
            resizeMode="cover" 
          />
        </View>
      </View>
      
      <Text style={styles.userName}>Alex Johnson</Text>
      <Text style={styles.memberStatus}>Member since 2026</Text>
      
      <TouchableOpacity 
        style={styles.editBtn} 
        onPress={() => router.push('/profile/edit')}
      >
        <Text style={styles.editBtnText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    marginHorizontal: moderateScale(20),
    padding: moderateScale(24),
    alignItems: "center",
    marginBottom: moderateScale(20),
  },
  avatarWrapper: {
    marginBottom: moderateScale(16),
  },
  avatarBorder: {
    padding: 3,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  avatar: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: 50,
    backgroundColor: "#222",
  },
  userName: {
    color: "#FFF",
    fontSize: moderateScale(24),
    fontWeight: "900",
    marginBottom: moderateScale(4),
  },
  memberStatus: {
    color: "#666",
    fontSize: moderateScale(14),
    fontWeight: "600",
    marginBottom: moderateScale(24),
  },
  editBtn: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: moderateScale(48),
    borderRadius: moderateScale(12),
    alignItems: "center",
    justifyContent: "center",
  },
  editBtnText: {
    color: "#000",
    fontSize: moderateScale(14),
    fontWeight: "900",
    letterSpacing: 0.5,
  },
});
