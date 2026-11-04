import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, FontSize, Spacing } from '@/constants/theme'
import Button from '@/components/Button';
import * as Haptics from "expo-haptics";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@react-native-vector-icons/ionicons";
export default function Index() {

  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1)
    let newCount = count + 1
    newCount % 10 == 0 && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const reset = () => {
    setCount(0);
  }
  return (
    <SafeAreaView style= {styles.screen}>
    <View style={styles.container}>
      <Text style={[styles.counter,
      count >= 10 && styles.numberColor]}>
        {count}</Text>

      <Button label='Reset' position='left' onPress={reset}></Button>
      <Button label='+1' onPress={increment} onLongPress={reset}></Button>
      <Button label='-1' position='center' onPress={decrement} onLongPress={reset}></Button>
    
    <Pressable style={styles.resetButton} onPress={reset}>
  <Ionicons name="refresh-sharp" size={30} color={Colors.primary} />
  <Text style={styles.resetLabel}>Reiniciar</Text>
</Pressable>

    </View>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: "center",
     alignItems: "center"
  },
  screen:{
    flex: 1
  },
  counter: {
    color: Colors.primary,
    fontSize: FontSize.counter
  }, numberColor: {
    color: Colors.highlight
  },resetButton: {
  flexDirection: "row", // icono y texto en la misma línea
  alignItems: "center",
  gap: 8,
},
resetLabel:{
  color: Colors.primary,
  fontSize: FontSize.button
}

})