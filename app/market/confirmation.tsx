import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/theme";
import { OrderSuccessHeader } from "@/components/tabs/market/confirmation/OrderSuccessHeader";

export default function ConfirmationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.replace('/(tabs)/market')}>
          <Ionicons name="arrow-back" size={moderateScale(24)} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Order Confirmation</Text>
        <View style={{ width: moderateScale(40) }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <OrderSuccessHeader />

        {/* Items Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ITEMS</Text>
          <View style={styles.itemCard}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>AForce Electro-Lite Pack</Text>
              <Text style={styles.itemCategory}>HIGH ELECTROLYTES + MINERALS</Text>
              <Text style={styles.itemQty}>QTY: 1 • NEON LIME EDITION</Text>
            </View>
            <Image 
              source={{ uri: "https://picsum.photos/100/100?random=11" }} 
              style={styles.itemThumb} 
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>SUMMARY</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.rowLabel}>Order Number</Text>
              <Text style={styles.rowValue}>#AF-99284</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.rowLabel}>Delivery Estimate</Text>
              <Text style={styles.rowValue}>24-48 Hours</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.rowLabel}>Payment Method</Text>
              <View style={styles.paymentMethod}>
                <Ionicons name="card" size={14} color="#FFF" style={{ marginRight: 8 }} />
                <Text style={styles.rowValue}>Visa •••• 4421</Text>
              </View>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalValue}>$48.50</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.trackBtn} 
          onPress={() => router.push('/market/order-history')}
        >
          <Ionicons name="bus-outline" size={moderateScale(20)} color="#000" style={{ marginRight: 12 }} />
          <Text style={styles.trackBtnText}>TRACK ORDER</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.continueBtn} 
          onPress={() => router.replace('/(tabs)/market')}
        >
          <Text style={styles.continueBtnText}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: "#111",
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
    fontSize: moderateScale(16),
    fontWeight: "900",
  },
  scrollContent: {
    paddingBottom: moderateScale(40),
  },
  section: {
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(32),
  },
  sectionLabel: {
    color: "#444",
    fontSize: moderateScale(11),
    fontWeight: "900",
    letterSpacing: 2,
    marginBottom: moderateScale(16),
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#080808",
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    borderWidth: 1,
    borderColor: "#111",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemInfo: {
    flex: 1,
    marginRight: moderateScale(16),
  },
  itemName: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "900",
    marginBottom: moderateScale(4),
  },
  itemCategory: {
    color: COLORS.primary,
    fontSize: moderateScale(10),
    fontWeight: "900",
    marginBottom: moderateScale(4),
  },
  itemQty: {
    color: "#444",
    fontSize: moderateScale(10),
    fontWeight: "800",
  },
  itemThumb: {
    width: moderateScale(80),
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    backgroundColor: "#111",
  },
  summaryCard: {
    backgroundColor: "#0D0D0D",
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    borderWidth: 1,
    borderColor: "#111",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: moderateScale(16),
  },
  rowLabel: {
    color: "#555",
    fontSize: moderateScale(14),
    fontWeight: "700",
  },
  rowValue: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "800",
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#1A1A1A",
    marginVertical: moderateScale(4),
    marginBottom: moderateScale(16),
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    color: "#666",
    fontSize: moderateScale(15),
    fontWeight: "700",
  },
  totalValue: {
    color: COLORS.primary,
    fontSize: moderateScale(22),
    fontWeight: "900",
  },
  trackBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: moderateScale(64),
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(20),
    marginBottom: moderateScale(16),
  },
  trackBtnText: {
    color: "#000",
    fontSize: moderateScale(16),
    fontWeight: "900",
    letterSpacing: 1,
  },
  continueBtn: {
    borderWidth: 1,
    borderColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    height: moderateScale(64),
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(20),
    backgroundColor: "#080808",
  },
  continueBtnText: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "900",
    letterSpacing: 1,
  },
});
