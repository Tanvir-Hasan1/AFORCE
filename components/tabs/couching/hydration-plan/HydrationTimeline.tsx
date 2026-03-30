import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface RoutineItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}

function RoutineItem({ title, description, isLast }: RoutineItemProps) {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.lineWrapper}>
        <View style={styles.dot} />
        {!isLast && <View style={styles.line} />}
      </View>
      
      <View style={styles.content}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
    </View>
  );
}

export function HydrationTimeline() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Ionicons name="shield-checkmark-outline" size={moderateScale(20)} color={COLORS.primary} />
          <Text style={styles.headerTitle}>Recommended Routine</Text>
        </View>

        <View style={styles.routineList}>
          <RoutineItem 
            title="Morning Hydration" 
            description="0.5L immediately after waking up to kickstart metabolism." 
          />
          <RoutineItem 
            title="Pre-workout" 
            description="0.4L roughly 30 minutes before your scheduled session." 
          />
          <RoutineItem 
            title="Post-workout Recovery" 
            description="0.8L balanced with electrolytes for optimal repair." 
          />
          <RoutineItem 
            title="Evening Hydration" 
            description="0.3L sipped slowly until 1 hour before sleep." 
            isLast 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(40),
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: moderateScale(24),
    padding: moderateScale(20),
    borderWidth: 1,
    borderColor: "#111",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
    marginBottom: moderateScale(24),
  },
  headerTitle: {
    color: "#FFF",
    fontSize: moderateScale(18),
    fontWeight: "900",
  },
  routineList: {
    paddingLeft: moderateScale(4),
  },
  itemWrapper: {
    flexDirection: "row",
    minHeight: moderateScale(80),
  },
  lineWrapper: {
    alignItems: "center",
    width: moderateScale(20),
  },
  dot: {
    width: moderateScale(12),
    height: moderateScale(12),
    borderRadius: moderateScale(6),
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: "#000",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 2,
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: "#111",
    zIndex: 1,
  },
  content: {
    flex: 1,
    paddingLeft: moderateScale(16),
    paddingBottom: moderateScale(24),
  },
  itemTitle: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "900",
    marginBottom: moderateScale(6),
  },
  itemDescription: {
    color: "#888",
    fontSize: moderateScale(13),
    lineHeight: moderateScale(20),
    fontWeight: "600",
  },
});
