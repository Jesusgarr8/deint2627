import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, FontSize, Spacing } from '@/constants/theme'
import * as Haptics from "expo-haptics";

interface IButtonProps{
    label: string,
    position: string,
    onPress?:() => void,
    onLongPress?: () => void
}

export default function Boton({label, position, onPress, onLongPress}: IButtonProps) {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.();
}

const handleLongPress= () => {
       Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onLongPress?.();
}

  return (
   <Pressable onPress={handlePress}
    onLongPress={handleLongPress}
    style={ 
      position == 'right' ? styles.right : styles.left}>
      <Text style={styles.texto}>{label}</Text>

   </Pressable>
  )
}

const styles = StyleSheet.create({
  texto:{
    color: Colors.primary,
    fontSize: FontSize.button,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: Colors.primary,
    padding: 9,
    paddingVertical: 1
  },
  right:{
    right: Spacing.lg
  },
  left:{
    left: Spacing.lg
  }
})