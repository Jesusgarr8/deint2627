import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ComponentProps } from 'react'
import { Colors, FontSize } from '@/constants/theme'
import { Icon } from 'expo-router'
import { Ionicons } from '@react-native-vector-icons/ionicons';

interface IActionButtonProps{
    label: string,
    icon: ComponentProps<typeof Ionicons>["name"],
    color?: string,
    onPress?: () => void
}
export default function ActionButton({label, icon, color, onPress}: IActionButtonProps) {
    return (
        <View>
            <Pressable style={[styles.boton, {backgroundColor: color}  ]}
            onPress={onPress}>
                <Ionicons style={styles.texto} name={icon}></Ionicons>
                <Text style={styles.texto}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    boton: {
        borderRadius: 24,
        paddingVertical: 8,
        paddingHorizontal: 24,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    texto: {
        color: Colors.white,
        fontSize: FontSize.title,
        fontWeight: 600
    },
  
})