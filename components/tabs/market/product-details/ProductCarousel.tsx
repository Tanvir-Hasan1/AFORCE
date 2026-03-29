import React, { useState } from "react";
import { StyleSheet, View, Image, FlatList, Dimensions, Animated } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width;

export function ProductCarousel({ images }: { images: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / ITEM_WIDTH);
          setActiveIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item} style={styles.image} resizeMode="contain" />
          </View>
        )}
      />

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(20),
  },
  item: {
    width: ITEM_WIDTH,
    height: moderateScale(300),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "100%",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: moderateScale(20),
    gap: moderateScale(8),
  },
  dot: {
    height: 4,
    borderRadius: 2,
  },
  activeDot: {
    width: moderateScale(24),
    backgroundColor: COLORS.primary,
  },
  inactiveDot: {
    width: moderateScale(12),
    backgroundColor: "#333",
  },
});
