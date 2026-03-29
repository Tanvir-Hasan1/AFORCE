import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/theme";
import { CheckoutProgress } from "@/components/tabs/market/checkout/CheckoutProgress";
import { AddressBlock } from "@/components/tabs/market/checkout/AddressBlock";
import { PaymentMethods } from "@/components/tabs/market/checkout/PaymentMethods";

export default function CheckoutScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={moderateScale(24)} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Checkout</Text>
        <View style={{ width: moderateScale(40) }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <CheckoutProgress currentStep={0} />

        <AddressBlock />
        
        <PaymentMethods />

        {/* Order Summary Component Inline */}
        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>AForce Performance Pack (x2)</Text>
              <Text style={styles.summaryValue}>$84.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Premium Shipping</Text>
              <Text style={styles.summaryValue}>$12.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tax</Text>
              <Text style={styles.summaryValue}>$6.42</Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalValue}>$102.42</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.completeBtn} 
          onPress={() => router.push('/market/confirmation')}
        >
          <Text style={styles.completeBtnText}>COMPLETE PURCHASE</Text>
          <Ionicons name="chevron-forward" size={moderateScale(20)} color="#000" />
        </TouchableOpacity>
        
        <Text style={styles.footerNote}>ENCRYPTED SECURE CHECKOUT</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(20),
    height: moderateScale(60),
  },
  iconBtn: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
  },
  scrollContent: {
    paddingBottom: moderateScale(40),
  },
  summarySection: {
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(24),
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "800",
    marginBottom: moderateScale(16),
  },
  summaryCard: {
    backgroundColor: "#080808",
    borderRadius: moderateScale(24),
    padding: moderateScale(20),
    borderWidth: 1,
    borderColor: "#111",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: moderateScale(12),
  },
  summaryLabel: {
    color: "#555",
    fontSize: moderateScale(14),
    fontWeight: "700",
  },
  summaryValue: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "800",
  },
  divider: {
    height: 1,
    backgroundColor: "#1A1A1A",
    marginVertical: moderateScale(12),
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateScale(4),
  },
  totalLabel: {
    color: "#AAA",
    fontSize: moderateScale(16),
    fontWeight: "700",
  },
  totalValue: {
    color: COLORS.primary,
    fontSize: moderateScale(24),
    fontWeight: "900",
  },
  completeBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: moderateScale(64),
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(20),
    gap: moderateScale(12),
    marginTop: moderateScale(8),
  },
  completeBtnText: {
    color: "#000",
    fontSize: moderateScale(16),
    fontWeight: "900",
    letterSpacing: 1,
  },
  footerNote: {
    textAlign: "center",
    color: "#333",
    fontSize: moderateScale(10),
    fontWeight: "900",
    letterSpacing: 1,
    marginTop: moderateScale(20),
  },
});
