import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

export function SupportForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Title</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter the title of your issue"
            placeholderTextColor="#444"
            value={title}
            onChangeText={setTitle}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Write in bellow box</Text>
        <View style={[styles.inputWrapper, styles.textAreaWrapper]}>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Write here..."
            placeholderTextColor="#444"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
    marginTop: moderateScale(20),
  },
  inputGroup: {
    marginBottom: moderateScale(24),
  },
  label: {
    color: "#666",
    fontSize: moderateScale(14),
    fontWeight: "800",
    marginBottom: moderateScale(10),
  },
  inputWrapper: {
    backgroundColor: "#050505",
    borderRadius: moderateScale(12),
    borderWidth: 1.5,
    borderColor: "#1A1A1A",
    paddingHorizontal: moderateScale(16),
    height: moderateScale(56),
    justifyContent: "center",
  },
  textAreaWrapper: {
    height: moderateScale(160),
    paddingVertical: moderateScale(16),
  },
  input: {
    color: "#FFF",
    fontSize: moderateScale(14),
    fontWeight: "600",
  },
  textArea: {
    height: "100%",
  },
});
