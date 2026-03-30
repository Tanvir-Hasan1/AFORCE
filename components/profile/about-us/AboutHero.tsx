import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Image } from "expo-image";
import { COLORS } from "@/constants/theme";

export function AboutHero() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image 
          source={require('@/assets/images/OBJECT.svg')} 
          style={styles.image} 
          contentFit="contain" 
        />
      </View>
      <Text style={styles.mission}>
        Revolutionizing human performance through precision hydration.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: moderateScale(30),
    paddingHorizontal: moderateScale(20),
  },
  imageWrapper: {
    width: moderateScale(260),
    height: moderateScale(220),
    marginBottom: moderateScale(24),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mission: {
    color: "#FFF",
    fontSize: moderateScale(24),
    fontWeight: "900",
    textAlign: "center",
    lineHeight: moderateScale(32),
  },
});
