import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import React from "react";

type IAppHeaderProps = {
  logo: ImageSourcePropType;
  title: string;
};

export default function AppHeader({ logo, title }: IAppHeaderProps) {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
  },
  logo: {
    width: 64,   
    height: 64,
  },
  title: {
    color: Colors.text,
    fontSize: FontSize.title,
    fontWeight: "bold",
  },
});