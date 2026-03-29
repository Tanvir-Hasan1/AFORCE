import React from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { ProductCard, Product } from "./ProductCard";

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "AForce Ultra Neon",
    category: "ELECTROLYTE BOOST",
    price: "$42.00",
    unit: "12 PACK",
    tag: "NEW",
    image: { uri: "https://picsum.photos/400/500?random=1" },
  },
  {
    id: "2",
    name: "Hydro Burst Citrus",
    category: "ENERGY HYDRATION",
    price: "$38.00",
    unit: "30 SERVINGS",
    image: { uri: "https://picsum.photos/400/500?random=2" },
  },
  {
    id: "3",
    name: "Neon Steel Flask",
    category: "PERFORMANCE",
    price: "$55.00",
    unit: "24 OZ",
    image: { uri: "https://picsum.photos/400/500?random=3" },
  },
  {
    id: "4",
    name: "Midnight Recovery",
    category: "RECOVERY MAX",
    price: "$45.00",
    oldPrice: "$55",
    unit: "60 CAPS",
    tag: "SALE",
    image: { uri: "https://picsum.photos/400/500?random=4" },
  },
  {
    id: "5",
    name: "Pro Velocity Gel",
    category: "ENERGY FUEL",
    price: "$29.00",
    unit: "12 PACK",
    image: { uri: "https://picsum.photos/400/500?random=5" },
  },
  {
    id: "6",
    name: "Tech Cooling Towel",
    category: "GEAR",
    price: "$24.00",
    unit: "1 EACH",
    image: { uri: "https://picsum.photos/400/500?random=6" },
  },
];

export function ProductGrid() {
  return (
    <View style={styles.container}>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: moderateScale(100),
  },
});
