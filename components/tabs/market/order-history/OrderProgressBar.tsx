import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

export type OrderStatus = "PLACED" | "TRANSIT" | "DELIVERED" | "COMPLETED";

export function OrderProgressBar({ status }: { status: OrderStatus }) {
  const isTransit = status === "TRANSIT" || status === "DELIVERED" || status === "COMPLETED";
  const isDelivered = status === "DELIVERED" || status === "COMPLETED";

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <View style={[styles.fill, { width: isDelivered ? "100%" : isTransit ? "50%" : "0%" }]} />
        
        <View style={styles.nodesRow}>
          <View style={[styles.node, { backgroundColor: COLORS.primary }]} />
          <View style={[styles.node, isTransit && { backgroundColor: COLORS.primary }]} />
          <View style={[styles.node, isDelivered && { backgroundColor: COLORS.primary }]} />
        </View>
      </View>

      <View style={styles.labelsRow}>
        <Text style={[styles.label, { textAlign: "left" }]}>Placed</Text>
        <Text style={[styles.label, { textAlign: "center" }]}>Transit</Text>
        <Text style={[styles.label, { textAlign: "right" }]}>Delivered</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(16),
  },
  track: {
    height: 4,
    backgroundColor: "#222",
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(12),
  },
  fill: {
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
  nodesRow: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  node: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: 5,
    backgroundColor: "#333",
    borderWidth: 2,
    borderColor: "#000",
  },
  labelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#555",
    fontSize: moderateScale(10),
    fontWeight: "bold",
    width: "33%",
  },
});
