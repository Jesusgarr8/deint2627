import { StyleSheet, Text, View } from "react-native";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import React from "react";

type IStatBoxProps = {
  label: string;
  value: string | number;
  valueColor?: string;
};

export default function StatBox({ label, value, valueColor = Colors.white }: IStatBoxProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    minWidth: 100,
  },
  label: {
    color: Colors.label,
    fontSize: FontSize.texto,
    marginBottom: Spacing.sm,
  },
  value: {
    fontSize: FontSize.contadores,
    fontWeight: "bold",
  },
});