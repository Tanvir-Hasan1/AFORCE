import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/theme";

export function ProductFooter() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Add To Cart */}
      <TouchableOpacity style={styles.cartBtn} onPress={() => router.push('/market/cart')}>
        <Ionicons name="cart-outline" size={moderateScale(20)} color="#000" />
        <Text style={styles.cartBtnText}>ADD TO CART</Text>
      </TouchableOpacity>

      {/* Subscribe */}
      <TouchableOpacity style={styles.subscribeBtn} onPress={() => router.push('/market/cart')}>
        <Ionicons name="calendar-outline" size={moderateScale(20)} color={COLORS.primary} />
        <Text style={styles.subscribeBtnText}>
          SUBSCRIBE & <Text style={{ color: COLORS.primary }}>SAVE 20%</Text>
        </Text>
      </TouchableOpacity>
      
      <Text style={styles.disclaimer}>FREE SHIPPING ON ORDERS OVER $50</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    backgroundColor: "#000",
    gap: moderateScale(12),
    paddingBottom: moderateScale(40),
  },
  cartBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: moderateScale(56),
    borderRadius: moderateScale(12),
    gap: moderateScale(10),
  },
  cartBtnText: {
    color: "#000",
    fontSize: moderateScale(14),
    fontWeight: "900",
    letterSpacing: 1,
  },
  subscribeBtn: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: moderateScale(56),
    borderRadius: moderateScale(12),
    gap: moderateScale(10),
  },
  subscribeBtnText: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "900",
    letterSpacing: 1,
  },
  disclaimer: {
    color: "#444",
    fontSize: moderateScale(10),
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: moderateScale(8),
  },
});
