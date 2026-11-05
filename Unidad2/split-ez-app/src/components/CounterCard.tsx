import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, FontSize } from '@/constants/theme'
import Boton from './Boton';
import * as Haptics from "expo-haptics";

interface ICounterCardPrrops{
    title: string,
   // count: number
    text: string
    increment: () => void
    decrement: () => void
    count: number

}
export default function CounterCard({title, text, increment, decrement, count}: ICounterCardPrrops) {
     
    
    return (

        <View style={styles.containerTarjeta}>
            <Text>{title}</Text>
            <View style={styles.tarjeta} >
                <Boton label='-' onPress={decrement} onLongPress={increment} position="left"></Boton>
                <Text style={styles.texto}>{count}{text}</Text>
                <Boton label='+' onPress={increment} onLongPress={increment} position="right"></Boton>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
containerTarjeta:{
    backgroundColor: Colors.tarjeta,
    gap:14,
    margin: 10,
    borderRadius:10

  },
  tarjeta: {
    flexDirection: 'row',
    //flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
  },
  texto:{
    color: Colors.primary,
    fontSize: FontSize.valores
  }
})