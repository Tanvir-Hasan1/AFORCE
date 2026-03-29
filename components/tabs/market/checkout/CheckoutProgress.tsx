import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { COLORS } from "@/constants/theme";

const STEPS = ["SHIPPING", "PAYMENT", "REVIEW"];

export function CheckoutProgress({ currentStep = 0 }: { currentStep?: number }) {
  return (
    <View style={styles.container}>
      <View style={styles.stepsRow}>
        {STEPS.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          
          return (
            <React.Fragment key={step}>
              {/* Node */}
              <View style={styles.nodeColumn}>
                <View style={[
                  styles.node,
                  isActive && styles.activeNode,
                  isCompleted && styles.completedNode
                ]}>
                  {isActive && <View style={styles.activeDot} />}
                </View>
                <Text style={[
                  styles.label,
                  isActive && styles.activeLabel,
                ]}>{step}</Text>
              </View>
              
              {/* Connector */}
              {index < STEPS.length - 1 && (
                <View style={[
                  styles.connector,
                  isCompleted && styles.completedConnector
                ]} />
              )}
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(10),
  },
  stepsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nodeColumn: {
    alignItems: "center",
  },
  node: {
    width: moderateScale(16),
    height: moderateScale(16),
    borderRadius: moderateScale(8),
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: moderateScale(8),
  },
  activeNode: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  completedNode: {
    backgroundColor: COLORS.primary,
  },
  activeDot: {
    width: moderateScale(6),
    height: moderateScale(6),
    borderRadius: 3,
    backgroundColor: "#000",
  },
  connector: {
    width: moderateScale(60),
    height: 2,
    backgroundColor: "#222",
    marginBottom: moderateScale(20),
    marginHorizontal: moderateScale(-10),
  },
  completedConnector: {
    backgroundColor: COLORS.primary,
  },
  label: {
    color: "#444",
    fontSize: moderateScale(10),
    fontWeight: "900",
    letterSpacing: 1,
  },
  activeLabel: {
    color: COLORS.primary,
  },
});
