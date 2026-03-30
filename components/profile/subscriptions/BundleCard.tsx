import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

interface BundleCardProps {
  image: string;
  title: string;
  price: string;
}

export function BundleCard({ image, title, price }: BundleCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      </View>
      
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.subscribeBtn}>
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: moderateScale(160),
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    overflow: "hidden",
    marginRight: moderateScale(12),
    borderWidth: 1,
    borderColor: "#111",
  },
  imageWrapper: {
    height: moderateScale(120),
    backgroundColor: "#0A0A0A",
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(12),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    padding: moderateScale(12),
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "900",
    marginBottom: moderateScale(4),
  },
  price: {
    color: COLORS.primary,
    fontSize: moderateScale(14),
    fontWeight: "900",
    marginBottom: moderateScale(12),
  },
  subscribeBtn: {
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    height: moderateScale(36),
    borderRadius: moderateScale(8),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A2200",
  },
  subscribeText: {
    color: COLORS.primary,
    fontSize: moderateScale(12),
    fontWeight: "900",
  },
});
