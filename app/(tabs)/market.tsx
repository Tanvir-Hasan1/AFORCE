import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";
import { MarketHeader } from "../../components/tabs/market/MarketHeader";
import { CategoryChips } from "../../components/tabs/market/CategoryChips";
import { ProductCard, Product } from "../../components/tabs/market/ProductCard";
import { Sidebar } from "../../components/ui/Sidebar";

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

export default function MarketScreen() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderHeader = () => <CategoryChips />;

  return (
    <View style={styles.container}>
      <MarketHeader onMenuPress={() => setIsSidebarOpen(true)} />
      
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        windowSize={5}
        removeClippedSubviews={true}
      />

      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onNavigate={(screen) => {
          if (screen.startsWith('/')) {
            router.push(screen as any);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingBottom: moderateScale(100),
  },
  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(20),
  },
});
