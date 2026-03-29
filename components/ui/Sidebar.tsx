import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Animated, Dimensions, Pressable, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/theme";

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.8;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (screen: string) => void;
}

export function Sidebar({ isOpen, onClose, onNavigate }: SidebarProps) {
  const [showModal, setShowModal] = useState(isOpen);
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: 0,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -SIDEBAR_WIDTH,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => setShowModal(false));
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <Modal
      transparent
      visible={showModal}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Backdrop overlay */}
        <Animated.View 
          style={[
            styles.backdrop, 
            { opacity: fadeAnim }
          ]} 
        >
          <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        </Animated.View>
        
        {/* Sidebar content */}
        <Animated.View 
          style={[
            styles.sidebar, 
            { transform: [{ translateX: slideAnim }] }
          ]}
        >
          <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
            {/* Sidebar Header */}
            <View style={styles.header}>
              <Text style={styles.logoText}>
                AFORCE<Text style={{ color: COLORS.primary }}>.</Text>
              </Text>
              <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                <Ionicons name="close-outline" size={moderateScale(28)} color={COLORS.text} />
              </TouchableOpacity>
            </View>

            {/* Menu Items */}
            <View style={styles.menuContainer}>
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => {
                  onNavigate?.('/market/order-history');
                  onClose();
                }}
              >
                <Ionicons name="receipt-outline" size={moderateScale(22)} color={COLORS.primary} />
                <Text style={styles.menuText}>Order History</Text>
                <Ionicons name="chevron-forward" size={moderateScale(18)} color="#444" />
              </TouchableOpacity>
              
              {/* Add more items here if needed */}
            </View>

            <View style={styles.footer}>
              <Text style={styles.versionText}>Version 1.0.4</Text>
            </View>
          </SafeAreaView>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    height: "100%",
    backgroundColor: "#0F0F0F",
    borderRightWidth: 1,
    borderRightColor: "#1A1A1A",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(24),
    marginBottom: moderateScale(20),
  },
  logoText: {
    color: COLORS.text,
    fontSize: moderateScale(24),
    fontWeight: "900",
    letterSpacing: 1,
  },
  closeBtn: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(22),
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(12),
    backgroundColor: "#161616",
    borderRadius: moderateScale(16),
    marginBottom: moderateScale(12),
  },
  menuText: {
    flex: 1,
    color: COLORS.text,
    fontSize: moderateScale(16),
    fontWeight: "600",
    marginLeft: moderateScale(16),
  },
  footer: {
    paddingVertical: moderateScale(20),
    alignItems: "center",
  },
  versionText: {
    color: "#444",
    fontSize: moderateScale(10),
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
