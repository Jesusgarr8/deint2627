import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, FontSize } from '@/constants/theme'
import { Ionicons } from '@react-native-vector-icons/ionicons';
import * as Haptics from "expo-haptics";

interface IPropsReiniciar{
    onPress?: () => void
}
export default function Reiniciar({onPress}: IPropsReiniciar) {
      const handlePress = () => {
       
        onPress?.();
    }
    return (
        <View>
            <Pressable style={styles.tarjeta}  onPress={handlePress}>
               
                <Ionicons name="reload-outline" size={24} color="#000" />
                <Text style={styles.texto}>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    tarjeta: {
        backgroundColor: Colors.highlight,
        borderRadius: 30,
        flexDirection : "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        padding: 12,
        marginHorizontal: 128,
        margin: 8
    },
    texto: {
        color: Colors.text,
        fontSize: FontSize.button,
        alignItems: "center",
        justifyContent: "space-between",
    }

})

function onPress() {
    throw new Error('Function not implemented.');
}
