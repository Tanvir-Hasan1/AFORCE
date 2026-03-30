import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export function EditAvatar() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image 
          source={{ uri: "https://i.pravatar.cc/300?u=minnie" }} 
          style={styles.avatar} 
          resizeMode="cover" 
        />
        <TouchableOpacity style={styles.editBadge} activeOpacity={0.8}>
          <Ionicons name="pencil" size={moderateScale(14)} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: moderateScale(30),
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(60),
    borderWidth: 2,
    borderColor: "#333",
  },
  editBadge: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(14),
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000",
  },
});
