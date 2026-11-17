import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, FontSize } from '@/constants/theme'

export default function BotonDificultad() {
  return (
    <View>
     <Pressable style={styles.boton}>
        <Text style={styles.texto}>Facil</Text>
     </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    boton:{
        backgroundColor: Colors.primary,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    texto:{
        color: Colors.white,
        fontSize: FontSize.button, 
        
    }
})