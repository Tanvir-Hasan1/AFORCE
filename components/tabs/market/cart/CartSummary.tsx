import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface CartSummaryProps {
  onCheckout: () => void;
  subtotal: string;
  shipping: string;
  tax: string;
  total: string;
}

export function CartSummary({ onCheckout, subtotal, shipping, tax, total }: CartSummaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.dragBar} />
      
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>{subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={styles.value}>{shipping}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Tax</Text>
        <Text style={styles.value}>{tax}</Text>
      </View>

      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>{total}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutBtn} onPress={onCheckout}>
        <Text style={styles.checkoutBtnText}>CHECKOUT NOW</Text>
        <Ionicons name="arrow-forward" size={moderateScale(20)} color="#000" />
      </TouchableOpacity>
      
      <Text style={styles.disclaimer}>SECURE ENCRYPTION SSL 256-BIT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
    padding: moderateScale(24),
    paddingBottom: moderateScale(40),
    gap: moderateScale(16),
  },
  dragBar: {
    width: moderateScale(40),
    height: 4,
    backgroundColor: "#333",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: moderateScale(8),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: "#777",
    fontSize: moderateScale(14),
    fontWeight: "700",
  },
  value: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "700",
  },
  totalRow: {
    marginTop: moderateScale(8),
    borderTopWidth: 1,
    borderTopColor: "#222",
    paddingTop: moderateScale(20),
  },
  totalLabel: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
  },
  totalValue: {
    color: COLORS.primary,
    fontSize: moderateScale(28),
    fontWeight: "900",
  },
  checkoutBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: moderateScale(64),
    borderRadius: moderateScale(20),
    gap: moderateScale(12),
    marginTop: moderateScale(8),
  },
  checkoutBtnText: {
    color: "#000",
    fontSize: moderateScale(16),
    fontWeight: "900",
    letterSpacing: 1,
  },
  disclaimer: {
    textAlign: "center",
    color: "#444",
    fontSize: moderateScale(10),
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: moderateScale(8),
  },
});
