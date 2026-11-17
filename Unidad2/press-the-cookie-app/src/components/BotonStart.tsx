import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, FontSize } from '@/constants/theme'
import { Icon } from 'expo-router'
import { Ionicons } from '@react-native-vector-icons/ionicons';


export default function BotonStart() {
    return (
        <View>
            <Pressable style={styles.boton}>
                <Ionicons style={styles.texto} name="play-circle-outline"></Ionicons>
                <Text style={styles.texto}>Start</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: Colors.primary,
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


    }
})