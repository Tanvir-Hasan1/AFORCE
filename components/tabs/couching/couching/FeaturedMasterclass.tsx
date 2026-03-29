import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../../../constants/theme";

export const FeaturedMasterclass = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>FEATURED MASTERCLASS</Text>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
        }}
        style={styles.card}
        imageStyle={styles.image}
      >
        {/* Top Badge */}
        <View style={styles.badge}>
          <Ionicons name="flash" size={12} color="black" />
          <Text style={styles.badgeText}>HYDRATION IMPACT: +12 SCORE</Text>
        </View>

        {/* Centered Play Button */}
        <View style={styles.centerContainer}>
          <View style={styles.playCircle}>
            <Ionicons
              name="play"
              size={32}
              color={COLORS.primary}
              style={{ marginLeft: 4 }}
            />
          </View>
        </View>

        {/* Bottom Text Overlay */}
        <View style={styles.bottomOverlay}>
          <Text style={styles.categoryText}>ADVANCED PERFORMANCE</Text>
          <Text style={styles.titleText}>
            HYDRATION STRATEGY FOR HIGH PERFORMANCE
          </Text>
          <Text style={styles.coachText}>Coach: Marcus Vane</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: moderateScale(24) },
  sectionTitle: {
    color: "#333",
    fontSize: moderateScale(13),
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: moderateScale(16),
  },
  card: {
    height: moderateScale(320),
    borderRadius: moderateScale(20),
    overflow: "hidden",
  },
  image: { borderRadius: moderateScale(20) },
  badge: {
    position: "absolute",
    top: moderateScale(16),
    left: moderateScale(16),
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(6),
    borderRadius: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
    gap: 4,
  },
  badgeText: { color: "black", fontSize: moderateScale(9), fontWeight: "900" },

  centerContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  playCircle: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(32),
    backgroundColor: "rgba(212, 255, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(212, 255, 0, 0.5)",
  },

  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: moderateScale(20),
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  categoryText: {
    color: "#DABF9D",
    fontSize: moderateScale(9),
    fontWeight: "900",
    letterSpacing: 0.5,
    marginBottom: moderateScale(8),
  },
  titleText: {
    color: "white",
    fontSize: moderateScale(20),
    fontWeight: "900",
    lineHeight: 24,
    marginBottom: moderateScale(8),
    letterSpacing: -0.5,
  },
  coachText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: moderateScale(11),
    fontWeight: "500",
  },
});
