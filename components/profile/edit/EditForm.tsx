import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

interface InputGroupProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric";
}

function InputGroup({ label, value, onChangeText, placeholder, keyboardType = "default" }: InputGroupProps) {
  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#444"
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
}

export function EditForm() {
  const [name, setName] = useState("Minnie");
  const [email, setEmail] = useState("minnie@gmail.com");
  const [dob, setDob] = useState("28/11/2005");
  const [country, setCountry] = useState("Mexico");

  return (
    <View style={styles.container}>
      <InputGroup label="Name" value={name} onChangeText={setName} />
      
      <InputGroup 
        label="Email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
      />

      <View style={styles.group}>
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity style={styles.inputWrapper} activeOpacity={0.8}>
          <Text style={styles.inputText}>{dob}</Text>
          <Ionicons name="calendar-outline" size={moderateScale(20)} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Country</Text>
        <TouchableOpacity style={styles.inputWrapper} activeOpacity={0.8}>
          <Text style={styles.inputText}>{country}</Text>
          <Ionicons name="caret-down" size={moderateScale(16)} color="#888" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
  },
  group: {
    marginBottom: moderateScale(20),
  },
  label: {
    color: "#666",
    fontSize: moderateScale(13),
    fontWeight: "700",
    marginBottom: moderateScale(10),
    marginLeft: moderateScale(4),
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#050505",
    borderRadius: moderateScale(28),
    height: moderateScale(56),
    paddingHorizontal: moderateScale(20),
    borderWidth: 1.5,
    borderColor: "#1A1A1A",
  },
  input: {
    flex: 1,
    color: "#FFF",
    fontSize: moderateScale(15),
    fontWeight: "700",
  },
  inputText: {
    color: "#FFF",
    fontSize: moderateScale(15),
    fontWeight: "700",
  },
});
