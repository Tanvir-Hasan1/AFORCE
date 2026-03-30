import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface AppSyncCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
  isConnected: boolean;
  lastSynced?: string;
  onPress?: () => void;
}

export function AppSyncCard({ icon, name, isConnected, lastSynced, onPress }: AppSyncCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.iconWrapper}>
          <Ionicons name={icon} size={moderateScale(32)} color="#FFF" />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.statusRow}>
            <View style={[styles.dot, { backgroundColor: isConnected ? "#00FF66" : "#444" }]} />
            <Text style={[styles.status, { color: isConnected ? "#00FF66" : "#666" }]}>
              {isConnected ? "Connected" : "Not connected"}
            </Text>
          </View>
        </View>
      </View>

      {isConnected ? (
        <View style={styles.syncInfo}>
          <Text style={styles.syncLabel}>Last synced</Text>
          <Text style={styles.syncTime}>{lastSynced}</Text>
        </View>
      ) : (
        <TouchableOpacity 
          style={styles.connectBtn} 
          activeOpacity={0.8}
          onPress={onPress}
        >
          <Text style={styles.connectText}>Connect</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: moderateScale(16),
    borderWidth: 1,
    borderColor: "#111",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(16),
  },
  iconWrapper: {
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(12),
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    gap: moderateScale(4),
  },
  name: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "900",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(6),
  },
  dot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
  },
  status: {
    fontSize: moderateScale(12),
    fontWeight: "700",
  },
  syncInfo: {
    alignItems: "flex-end",
  },
  syncLabel: {
    color: "#444",
    fontSize: moderateScale(11),
    fontWeight: "700",
    textTransform: "uppercase",
  },
  syncTime: {
    color: "#FFF",
    fontSize: moderateScale(13),
    fontWeight: "900",
  },
  connectBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(12),
  },
  connectText: {
    color: "#000",
    fontSize: moderateScale(13),
    fontWeight: "900",
  },
});
