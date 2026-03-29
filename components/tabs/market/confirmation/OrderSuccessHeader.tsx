import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

export function OrderSuccessHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <View style={styles.imageCard}>
          <Image 
            source={{ uri: "https://picsum.photos/300/300?random=10" }} 
            style={styles.image} 
            resizeMode="contain" 
          />
        </View>
      </View>
      
      <Text style={styles.successTitle}>Success!</Text>
      <Text style={styles.successDesc}>
        Your hydration fuel is on the way. Check{"\n"}your inbox for tracking details soon.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: moderateScale(40),
  },
  imageWrapper: {
    marginBottom: moderateScale(32),
  },
  imageCard: {
    width: moderateScale(200),
    height: moderateScale(200),
    backgroundColor: "#111",
    borderRadius: moderateScale(32),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#1A1A1A",
  },
  image: {
    width: "70%",
    height: "70%",
  },
  successTitle: {
    color: "#FFF",
    fontSize: moderateScale(32),
    fontWeight: "900",
    marginBottom: moderateScale(16),
  },
  successDesc: {
    color: "#666",
    fontSize: moderateScale(15),
    fontWeight: "600",
    textAlign: "center",
    lineHeight: moderateScale(22),
  },
});
