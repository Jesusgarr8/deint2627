import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, FontSize } from '@/constants/theme'
import { Ionicons } from '@react-native-vector-icons/ionicons';
import * as Haptics from "expo-haptics";

interface IPropsReiniciar{
    onPress?: () => void
    disabled: boolean
}
export default function Reiniciar({onPress, disabled}: IPropsReiniciar) {
      const handlePress = () => {
       
        onPress?.();
    }
    return (
        <View>
            <Pressable style={[styles.tarjeta,  disabled && styles.disabled]}  onPress={handlePress}  >
               
                <Ionicons name="reload-outline" size={24} color={Colors.primary} />
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
        color: Colors.primary,
        fontSize: FontSize.button,
        alignItems: "center",
        justifyContent: "space-between",
    },
    disabled:{
        opacity: 0.8,
      
    }

})

function onPress() {
    throw new Error('Function not implemented.');
}
