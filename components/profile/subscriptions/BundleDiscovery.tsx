import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { BundleCard } from "./BundleCard";

export function BundleDiscovery() {
  const bundles = [
    {
      id: "1",
      title: "ELITE HYDRATION",
      price: "$29.99/mo",
      image: "https://cdn-icons-png.flaticon.com/512/3105/3105807.png",
    },
    {
      id: "2",
      title: "ALKALINE PRO",
      price: "$19.99/mo",
      image: "https://cdn-icons-png.flaticon.com/512/3105/3105807.png",
    },
    {
      id: "3",
      title: "PERFORMANCE+",
      price: "$39.99/mo",
      image: "https://cdn-icons-png.flaticon.com/512/3105/3105807.png",
    },
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.container}
    >
      {bundles.map((bundle) => (
        <BundleCard 
          key={bundle.id}
          title={bundle.title}
          price={bundle.price}
          image={bundle.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: moderateScale(20),
  },
});
