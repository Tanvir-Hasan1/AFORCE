import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/theme";
import { HistoryTabs } from "../../components/tabs/market/order-history/HistoryTabs";
import { OrderCard, Order } from "../../components/tabs/market/order-history/OrderCard";

const DUMMY_ORDERS: Order[] = [
  {
    id: "1",
    orderNumber: "#AF-9210",
    date: "Jan 24, 2024",
    items: 2,
    price: "$74.99",
    status: "TRANSIT",
    statusLabel: "IN TRANSIT",
    image: { uri: "https://picsum.photos/200/200?random=1" },
  },
  {
    id: "2",
    orderNumber: "#AF-8829",
    date: "Oct 12, 2023",
    items: 1,
    price: "$42.00",
    status: "DELIVERED",
    statusLabel: "DELIVERED",
    image: { uri: "https://picsum.photos/200/200?random=2" },
  },
  {
    id: "3",
    orderNumber: "#AF-7751",
    date: "Aug 05, 2023",
    items: 3,
    price: "$128.50",
    status: "COMPLETED",
    statusLabel: "COMPLETED",
    image: { uri: "https://picsum.photos/200/200?random=3" },
  },
  {
    id: "4",
    orderNumber: "#AF-6542",
    date: "Jun 18, 2023",
    items: 1,
    price: "$29.00",
    status: "DELIVERED",
    statusLabel: "DELIVERED",
    image: { uri: "https://picsum.photos/200/200?random=4" },
  },
];

export default function OrderHistoryScreen() {
  const router = useRouter();

  const renderHeader = () => (
    <View style={styles.headerContent}>
      <HistoryTabs />
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={moderateScale(24)} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Order History</Text>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="search-outline" size={moderateScale(24)} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={DUMMY_ORDERS}
        renderItem={({ item }) => <OrderCard order={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
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
    borderBottomWidth: 1,
    borderBottomColor: "#1A1A1A",
  },
  backBtn: {
    width: moderateScale(40),
    height: moderateScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.text,
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  searchBtn: {
    width: moderateScale(40),
    height: moderateScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  headerContent: {
    paddingHorizontal: moderateScale(20),
  },
  listContent: {
    padding: moderateScale(20),
    paddingBottom: moderateScale(40),
  },
});
