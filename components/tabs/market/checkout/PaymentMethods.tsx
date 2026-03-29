import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface PaymentMethod {
  id: string;
  name: string;
  subtext: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const METHODS: PaymentMethod[] = [
  { id: "card", name: "Credit Card", subtext: "Visa •••• 4242", icon: "card-outline" },
  { id: "paypal", name: "PayPal", subtext: "Account Linked", icon: "logo-paypal" },
  { id: "apple", name: "Apple Pay", subtext: "Quick Checkout", icon: "logo-apple" },
];

export function PaymentMethods() {
  const [selected, setSelected] = useState("card");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      
      {METHODS.map((method) => {
        const isActive = selected === method.id;
        return (
          <TouchableOpacity 
            key={method.id} 
            style={[styles.methodCard, isActive && styles.activeCard]}
            onPress={() => setSelected(method.id)}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={method.icon} size={moderateScale(20)} color={isActive ? COLORS.primary : "#FFF"} />
            </View>
            <View style={styles.details}>
              <Text style={[styles.name, isActive && styles.activeText]}>{method.name}</Text>
              <Text style={styles.subtext}>{method.subtext}</Text>
            </View>
            <View style={[styles.radio, isActive && styles.activeRadio]}>
              {isActive && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(24),
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "800",
    marginBottom: moderateScale(16),
  },
  methodCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    borderRadius: moderateScale(20),
    padding: moderateScale(16),
    borderWidth: 1,
    borderColor: "#1A1A1A",
    marginBottom: moderateScale(12),
  },
  activeCard: {
    borderColor: COLORS.primary,
    backgroundColor: "#0D0D0D",
  },
  iconContainer: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(12),
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: moderateScale(16),
  },
  details: {
    flex: 1,
  },
  name: {
    color: "#FFF",
    fontSize: moderateScale(15),
    fontWeight: "700",
    marginBottom: moderateScale(2),
  },
  activeText: {
    color: "#FFF",
  },
  subtext: {
    color: "#444",
    fontSize: moderateScale(12),
    fontWeight: "600",
  },
  radio: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  activeRadio: {
    borderColor: COLORS.primary,
  },
  radioInner: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
});
