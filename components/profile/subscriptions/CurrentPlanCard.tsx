import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

export function CurrentPlanCard() {
  const handleCancel = () => {
    Alert.alert(
      "Cancel Subscription",
      "Are you sure you want to cancel your AForce Monthly Hydration Pack?",
      [
        { text: "Keep Plan", style: "cancel" },
        { text: "Confirm Cancel", style: "destructive" },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: "https://picsum.photos/400/400?random=20" }} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>
      
      <View style={styles.info}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>ACTIVE</Text>
        </View>
        <Text style={styles.title}>AForce Monthly Hydration Pack</Text>
        <Text style={styles.price}>$29.99/month</Text>
        
        <TouchableOpacity style={styles.manageBtn}>
          <Text style={styles.manageBtnText}>Manage Plan</Text>
        </TouchableOpacity>
        
        <View style={styles.row}>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>Change</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={handleCancel} style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel Subscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#111",
    marginBottom: moderateScale(24),
  },
  imageContainer: {
    height: moderateScale(200),
    backgroundColor: "#0A0A0A",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  info: {
    padding: moderateScale(20),
  },
  badge: {
    backgroundColor: "#223300",
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(4),
    borderRadius: moderateScale(6),
    alignSelf: "flex-start",
    marginBottom: moderateScale(12),
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  badgeText: {
    color: COLORS.primary,
    fontSize: moderateScale(10),
    fontWeight: "900",
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
    marginBottom: moderateScale(4),
  },
  price: {
    color: "#666",
    fontSize: moderateScale(14),
    fontWeight: "700",
    marginBottom: moderateScale(20),
  },
  manageBtn: {
    backgroundColor: COLORS.primary,
    height: moderateScale(48),
    borderRadius: moderateScale(12),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: moderateScale(12),
  },
  manageBtnText: {
    color: "#000",
    fontSize: moderateScale(14),
    fontWeight: "900",
  },
  row: {
    flexDirection: "row",
    gap: moderateScale(12),
    marginBottom: moderateScale(16),
  },
  secondaryBtn: {
    flex: 1,
    height: moderateScale(44),
    borderRadius: moderateScale(12),
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryBtnText: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "800",
  },
  cancelBtn: {
    alignSelf: "center",
    marginTop: moderateScale(8),
  },
  cancelText: {
    color: "#444",
    fontSize: moderateScale(12),
    fontWeight: "800",
    textDecorationLine: "underline",
  },
});
