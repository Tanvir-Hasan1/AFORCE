import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Share } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/theme";
import { ProductCarousel } from "@/components/tabs/market/product-details/ProductCarousel";
import { ProductBadges } from "@/components/tabs/market/product-details/ProductBadges";
import { IngredientGrid } from "@/components/tabs/market/product-details/IngredientGrid";
import { UsageStepper } from "@/components/tabs/market/product-details/UsageStepper";
import { ProductFooter } from "@/components/tabs/market/product-details/ProductFooter";

export default function ProductDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // Mock product data based on the provided screenshot
  const product = {
    id: id,
    name: "ELITE HYDRATION PRO",
    price: "$34.99",
    oldPrice: "$42.00",
    tag: "HIGH PERFORMANCE",
    description: "Maximum absorption electrolyte formula designed for professional athletes and high-intensity training sessions.",
    images: [
      { uri: "https://picsum.photos/400/800?random=10" },
      { uri: "https://picsum.photos/400/800?random=11" },
      { uri: "https://picsum.photos/400/800?random=12" },
    ],
  };

  const onShare = async () => {
    try {
      await Share.share({ message: `Check out ${product.name} on AFORCE!` });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container} edges={["top"]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={moderateScale(24)} color={COLORS.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>AFORCE HYDRATION</Text>
          <TouchableOpacity style={styles.iconBtn} onPress={onShare}>
            <Ionicons name="share-social-outline" size={moderateScale(24)} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Image Carousel */}
          <ProductCarousel images={product.images} />

          {/* Product Info Section */}
          <View style={styles.infoSection}>
            <View style={styles.tagPriceRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{product.tag}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{product.price}</Text>
                <Text style={styles.oldPriceText}>{product.oldPrice}</Text>
              </View>
            </View>

            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>

            {/* Sub-components */}
            <ProductBadges />
            <IngredientGrid />
            <UsageStepper />

            {/* Non-sticky Footer / Action Buttons */}
            <ProductFooter />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
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
  headerTitle: {
    color: COLORS.text,
    fontSize: moderateScale(14),
    fontWeight: "900",
    letterSpacing: 2,
  },
  scrollContent: {
    paddingBottom: moderateScale(40),
  },
  infoSection: {
    paddingHorizontal: moderateScale(20),
    marginTop: moderateScale(-10),
  },
  tagPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(12),
  },
  tag: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(4),
  },
  tagText: {
    color: "#000",
    fontSize: moderateScale(10),
    fontWeight: "900",
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  priceText: {
    color: COLORS.primary,
    fontSize: moderateScale(24),
    fontWeight: "900",
  },
  oldPriceText: {
    color: "#444",
    fontSize: moderateScale(14),
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
  productName: {
    color: "#FFF",
    fontSize: moderateScale(26),
    fontWeight: "900",
    marginBottom: moderateScale(12),
  },
  description: {
    color: "#AAA",
    fontSize: moderateScale(13),
    fontWeight: "600",
    lineHeight: moderateScale(18),
    marginBottom: moderateScale(20),
  },
});
