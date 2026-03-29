import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export interface CartItemType {
  id: string;
  name: string;
  subtext: string;
  price: string;
  quantity: number;
  image: any;
}

export function CartItem({ item }: { item: CartItemType }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>
      
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subtext}>{item.subtext}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.qtyBtn}>
          <Ionicons name="remove" size={moderateScale(16)} color="#AAA" />
        </TouchableOpacity>
        <Text style={styles.qtyText}>{item.quantity}</Text>
        <TouchableOpacity style={[styles.qtyBtn, styles.plusBtn]}>
          <Ionicons name="add" size={moderateScale(16)} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(16),
    marginBottom: moderateScale(16),
  },
  imageContainer: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(12),
    backgroundColor: "#1A1A1A",
    overflow: "hidden",
    marginRight: moderateScale(16),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    color: "#FFF",
    fontSize: moderateScale(15),
    fontWeight: "700",
    marginBottom: moderateScale(2),
  },
  subtext: {
    color: "#777",
    fontSize: moderateScale(12),
    fontWeight: "600",
    marginBottom: moderateScale(8),
  },
  price: {
    color: COLORS.primary,
    fontSize: moderateScale(16),
    fontWeight: "900",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    borderRadius: moderateScale(12),
    padding: 3,
    gap: moderateScale(12),
  },
  qtyBtn: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(8),
    alignItems: "center",
    justifyContent: "center",
  },
  plusBtn: {
    backgroundColor: COLORS.primary,
  },
  qtyText: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "bold",
  },
});
