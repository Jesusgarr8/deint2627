import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, FontSize, Spacing } from '@/constants/theme'
import * as Haptics from  "expo-haptics"

interface IButtonProps {
    label: string,
    position?: "left" | "right" | "center",
    onPress?: () => void,
    onLongPress?: () => void
}

export default function Button({ label, position = "right", onPress, onLongPress }: IButtonProps) {
    
const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.();
}

const handleLongPress= () => {
       Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onLongPress?.();
}

    return (
        <Pressable style={ 
        ({pressed}) =>
        [styles.button,
        position == 'right' ? styles.right : position == 'left'  ?  styles.left : styles.center,
        pressed && styles.pressed]}
            onPress={handlePress}
            onLongPress={handleLongPress}
            delayLongPress={300}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        bottom: Spacing.md,
        backgroundColor: Colors.primary,
        padding: Spacing.md,
        borderRadius: Spacing.sm,
        boxShadow: "0 6px 12px rgba(0,0,0,0.3)"
    },
    buttonLabel: {
        color: Colors.textOnPrimary,
        fontSize: FontSize.button,
        fontWeight: "bold"
    },
    right: {
        right: Spacing.lg
    },
    left: {
        left: Spacing.lg
    },
    center: {
      //  center: Spacing.lg
    },
    pressed: {
        backgroundColor: Colors.primaryPressed,
        transform: [{
            scale: 0.9
        }]
    }
})