import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";
import { OrderProgressBar, OrderStatus } from "./OrderProgressBar";

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: number;
  price: string;
  status: OrderStatus;
  statusLabel: string;
  image: any;
}

export function OrderCard({ order }: { order: Order }) {
  const getStatusColor = () => {
    switch (order.status) {
      case "TRANSIT": return COLORS.primary;
      case "DELIVERED": return "#00FF66";
      case "COMPLETED": return COLORS.textDim;
      default: return "#AAA";
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <View style={styles.thumbnailContainer}>
          <Image source={order.image} style={styles.image} resizeMode="cover" />
        </View>
        
        <View style={styles.details}>
          <View style={styles.statusRow}>
            <View style={[styles.dot, { backgroundColor: getStatusColor() }]} />
            <Text style={[styles.statusText, { color: getStatusColor() }]}>{order.statusLabel}</Text>
          </View>
          <Text style={styles.orderNumber}>Order {order.orderNumber}</Text>
          <Text style={styles.metadata}>{order.date} • {order.items} Items</Text>
        </View>
        
        <Text style={styles.price}>{order.price}</Text>
      </View>

      {/* Progress Bar (Visible for in-progress/delivered) */}
      <OrderProgressBar status={order.status} />

      {/* Action Buttons */}
      <View style={styles.actions}>
        {order.status === "TRANSIT" && (
          <>
            <TouchableOpacity style={[styles.btn, styles.primaryBtn]}>
              <Ionicons name="bus-outline" size={moderateScale(16)} color="#000" />
              <Text style={styles.primaryBtnText} numberOfLines={1}>Track Shipment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.secondaryBtn]}>
              <Ionicons name="refresh-outline" size={moderateScale(16)} color={COLORS.text} />
              <Text style={styles.secondaryBtnText} numberOfLines={1}>Reorder</Text>
            </TouchableOpacity>
          </>
        )}
        
        {order.status === "DELIVERED" && (
          <>
            <TouchableOpacity style={[styles.btn, styles.secondaryBtn]}>
              <Ionicons name="document-text-outline" size={moderateScale(16)} color={COLORS.text} />
              <Text style={styles.secondaryBtnText} numberOfLines={1}>View Invoice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.orangeBtn]}>
              <Ionicons name="refresh-outline" size={moderateScale(16)} color="#FFF" />
              <Text style={styles.orangeBtnText} numberOfLines={1}>Reorder</Text>
            </TouchableOpacity>
          </>
        )}

        {order.status === "COMPLETED" && (
          <TouchableOpacity style={[styles.btn, styles.secondaryBtn, { width: "100%" }]}>
            <Ionicons name="refresh-outline" size={moderateScale(16)} color={COLORS.text} />
            <Text style={styles.secondaryBtnText}>Reorder All Items</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(20),
    marginBottom: moderateScale(16),
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  thumbnailContainer: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(12),
    overflow: "hidden",
    backgroundColor: "#1A1A1A",
    marginRight: moderateScale(16),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(4),
  },
  dot: {
    width: moderateScale(6),
    height: moderateScale(6),
    borderRadius: 3,
    marginRight: moderateScale(6),
  },
  statusText: {
    fontSize: moderateScale(10),
    fontWeight: "900",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  orderNumber: {
    color: COLORS.text,
    fontSize: moderateScale(16),
    fontWeight: "800",
    marginBottom: moderateScale(2),
  },
  metadata: {
    color: COLORS.textDim,
    fontSize: moderateScale(12),
    fontWeight: "600",
  },
  price: {
    color: COLORS.text,
    fontSize: moderateScale(18),
    fontWeight: "800",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: moderateScale(8),
    marginTop: moderateScale(16),
  },
  btn: {
    flex: 1,
    flexDirection: "row",
    height: moderateScale(44),
    borderRadius: moderateScale(12),
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(4),
    paddingHorizontal: moderateScale(8),
  },
  primaryBtn: {
    backgroundColor: COLORS.primary,
  },
  primaryBtnText: {
    color: "#000",
    fontSize: moderateScale(12),
    fontWeight: "900",
  },
  secondaryBtn: {
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#222",
  },
  secondaryBtnText: {
    color: COLORS.text,
    fontSize: moderateScale(12),
    fontWeight: "900",
  },
  orangeBtn: {
    backgroundColor: "#333", // Using sleek dark for secondary reorder
  },
  orangeBtnText: {
    color: "#FFF",
    fontSize: moderateScale(12),
    fontWeight: "900",
  },
});
