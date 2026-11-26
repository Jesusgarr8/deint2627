import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/theme";
import React from "react";

interface ImageButtonProps {
  source: ImageSourcePropType;
  size: number;
  onPress: () => void;
  disabled?: boolean;
}

export default function ImageButton({
  source,
  size,
  onPress,
  disabled = false,
}: ImageButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.contenedor,
        { width: size, height: size, borderRadius: size / 2 },
        pressed && styles.pressed,
      ]}
    >
      <Image source={source} style={styles.galleta} resizeMode="contain" />

      {disabled && (
        <View style={[styles.overlayOscuro, { borderRadius: size / 2 }]} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: "center",
    alignItems: "center",
    // halo: sombra clara, sin desplazamiento
    boxShadow: `0 0 30px 8px ${Colors.border}`,
  },
  galleta: {
    width: "100%",
    height: "100%",
  },
  overlayOscuro: {
    ...StyleSheet.absoluteFill,
    backgroundColor: Colors.overlay, 
  },
  pressed: {
    transform: [{ scale: 0.8 }],
    opacity: 0.8,
  },
});