import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

interface PolicySectionProps {
  title: string;
  content: string;
}

export function PolicySection({ title, content }: PolicySectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(24),
  },
  title: {
    color: "#FFF",
    fontSize: moderateScale(16),
    fontWeight: "900",
    marginBottom: moderateScale(12),
  },
  content: {
    color: "#888",
    fontSize: moderateScale(14),
    lineHeight: moderateScale(22),
    fontWeight: "500",
  },
});
