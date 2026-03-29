import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/theme";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  unit: string;
  image: any;
  tag?: "NEW" | "SALE";
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image 
          source={product.image} 
          style={styles.image} 
          resizeMode="cover"
        />
        
        {product.tag && (
          <View style={[
            styles.tag,
            product.tag === "SALE" ? styles.saleTag : styles.newTag
          ]}>
            <Text style={styles.tagText}>{product.tag}</Text>
          </View>
        )}
        
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add" size={moderateScale(24)} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.categoryText}>{product.category}</Text>
        <Text style={styles.nameText} numberOfLines={1}>{product.name}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>{product.price}</Text>
          <Text style={styles.unitText}> / {product.unit}</Text>
          {product.oldPrice && (
            <Text style={styles.oldPriceText}>{product.oldPrice}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginBottom: moderateScale(24),
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 0.85,
    borderRadius: moderateScale(24),
    overflow: "hidden",
    backgroundColor: "#1A1A1A",
    marginBottom: moderateScale(12),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  tag: {
    position: "absolute",
    top: moderateScale(12),
    left: moderateScale(12),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(8),
  },
  newTag: {
    backgroundColor: COLORS.primary,
  },
  saleTag: {
    backgroundColor: "#333",
  },
  tagText: {
    color: "#000",
    fontSize: moderateScale(9),
    fontWeight: "900",
  },
  addBtn: {
    position: "absolute",
    bottom: moderateScale(12),
    right: moderateScale(12),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  infoContainer: {
    paddingHorizontal: moderateScale(4),
  },
  categoryText: {
    color: COLORS.primary,
    fontSize: moderateScale(9),
    fontWeight: "800",
    letterSpacing: 0.5,
    marginBottom: moderateScale(4),
    textTransform: "uppercase",
  },
  nameText: {
    color: COLORS.text,
    fontSize: moderateScale(15),
    fontWeight: "700",
    marginBottom: moderateScale(4),
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    color: "#AAA",
    fontSize: moderateScale(13),
    fontWeight: "700",
  },
  unitText: {
    color: "#666",
    fontSize: moderateScale(11),
    fontWeight: "600",
  },
  oldPriceText: {
    color: "#666",
    fontSize: moderateScale(11),
    fontWeight: "600",
    textDecorationLine: "line-through",
    marginLeft: moderateScale(8),
  },
});
