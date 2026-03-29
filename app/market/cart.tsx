import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/theme";
import { CartItem, CartItemType } from "@/components/tabs/market/cart/CartItem";
import { CartSummary } from "@/components/tabs/market/cart/CartSummary";

const DUMMY_CART: CartItemType[] = [
  {
    id: "1",
    name: "AForce Original",
    subtext: "500ml • Lime Punch",
    price: "$4.99",
    quantity: 2,
    image: { uri: "https://picsum.photos/200/200?random=1" },
  },
  {
    id: "2",
    name: "Electrolyte Pack",
    subtext: "30 Servings • Neon Lime",
    price: "$24.99",
    quantity: 1,
    image: { uri: "https://picsum.photos/200/200?random=2" },
  },
  {
    id: "3",
    name: "Pro Shaker v2",
    subtext: "750ml • Smoked Black",
    price: "$12.50",
    quantity: 1,
    image: { uri: "https://picsum.photos/200/200?random=3" },
  },
];

export default function CartScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={moderateScale(24)} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Your Cart</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="trash-outline" size={moderateScale(24)} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={DUMMY_CART}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <CartSummary 
        subtotal="$47.47"
        shipping="$5.00"
        tax="$2.35"
        total="$54.82"
        onCheckout={() => router.push('/market/checkout')}
      />
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
    marginBottom: moderateScale(10),
  },
  iconBtn: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
  },
  listContent: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(20),
  },
});
