import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/theme";

export function MarketHeader({ onMenuPress }: { onMenuPress: () => void }) {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.iconBtn} onPress={onMenuPress}>
          <Ionicons name="menu-outline" size={moderateScale(28)} color={COLORS.text} />
        </TouchableOpacity>
        
        <Text style={styles.logoText}>
          AFORCE<Text style={{ color: COLORS.primary }}>.</Text>
        </Text>
        
        <TouchableOpacity style={styles.cartBtn} onPress={() => router.push('/market/cart')}>
          <Ionicons name="cart-outline" size={moderateScale(28)} color={COLORS.text} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(10),
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: moderateScale(56),
  },
  iconBtn: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(22),
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: COLORS.text,
    fontSize: moderateScale(22),
    fontWeight: "900",
    letterSpacing: 1.5,
  },
  cartBtn: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(22),
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: moderateScale(4),
    right: moderateScale(4),
    backgroundColor: COLORS.primary,
    width: moderateScale(18),
    height: moderateScale(18),
    borderRadius: moderateScale(9),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  badgeText: {
    color: "#000",
    fontSize: moderateScale(9),
    fontWeight: "900",
  },
});
