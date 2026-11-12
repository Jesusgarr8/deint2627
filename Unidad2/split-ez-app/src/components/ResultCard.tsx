import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, FontSize } from '@/constants/theme'

interface IPropsResult {
  resultado: string;
}
export default function ResultCard({ resultado }: IPropsResult) {
  return (

    <View style={styles.containerResultado}>

      <View style={styles.tarjeta} >

        <Text style={styles.texto}>Resultado</Text>
        <Text style={styles.texto}>{resultado}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  containerResultado: {
    backgroundColor: Colors.resultado,
    gap: 14,
    margin: 10,
    borderRadius: 10

  },
  tarjeta: {
    flexDirection: 'row',
    //flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
  },
  texto: {
    color: Colors.textOnPrimary,
    fontSize: FontSize.button,
    alignItems: "center",
    justifyContent: "space-between",


  }
})