import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "../../../../constants/theme";

export const VideoHeader = () => {
  return (
    <View style={styles.container}>
      {/* Video Mock */}
      <View style={styles.videoContainer}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop",
          }}
          style={styles.thumbnail}
        >
          <View style={styles.playCircle}>
            <Ionicons
              name="play"
              size={48}
              color={COLORS.primary}
              style={{ marginLeft: 6 }}
            />
          </View>
        </ImageBackground>

        {/* Controls Overlay */}
        <View style={styles.controls}>
          <View style={styles.progressRow}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: "35%" }]} />
              <View style={styles.progressKnob} />
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.leftControls}>
              <Ionicons name="pause" size={20} color="white" />
              <Text style={styles.timeText}>04:20 / 12:00</Text>
            </View>
            <View style={styles.rightControls}>
              <Ionicons name="volume-medium" size={20} color="white" />
              <Ionicons name="scan" size={20} color="white" />
            </View>
          </View>
        </View>
      </View>

      {/* Intro Text */}
      <View style={styles.introContent}>
        <View style={styles.introRow}>
          <Text style={styles.coachName}>
            COACH MARCUS • NUTRITION SPECIALIST
          </Text>
          <View style={styles.durationBadge}>
            <Ionicons name="time-outline" size={14} color="#888" />
            <Text style={styles.durationText}>12 MIN</Text>
          </View>
        </View>
        <Text style={styles.title}>HYDRATION STRATEGY</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "black" },
  videoContainer: {
    width: "100%",
    height: moderateScale(240),
    backgroundColor: "#111",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  playCircle: {
    width: moderateScale(72),
    height: moderateScale(72),
    borderRadius: moderateScale(36),
    backgroundColor: "rgba(212, 255, 0, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.primary,
  },

  controls: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: moderateScale(12),
  },
  progressRow: { marginBottom: moderateScale(8) },
  progressBar: {
    height: 4,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  progressFill: {
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
  progressKnob: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginLeft: -5,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftControls: { flexDirection: "row", alignItems: "center", gap: 12 },
  rightControls: { flexDirection: "row", alignItems: "center", gap: 16 },
  timeText: { color: "white", fontSize: moderateScale(12), fontWeight: "600" },

  introContent: { padding: moderateScale(20), paddingTop: moderateScale(24) },
  introRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  coachName: {
    color: COLORS.primary,
    fontSize: moderateScale(10),
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  durationBadge: { flexDirection: "row", alignItems: "center", gap: 4 },
  durationText: {
    color: "#888",
    fontSize: moderateScale(11),
    fontWeight: "bold",
  },
  title: {
    color: "white",
    fontSize: moderateScale(24),
    fontWeight: "900",
    letterSpacing: -0.5,
  },
});
