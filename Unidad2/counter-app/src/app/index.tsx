import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, FontSize, Spacing } from '@/constants/theme'
import Button from '@/components/Button';


export default function Index() {

  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = ()  =>  {
    setCount(count -1);
  }

  const reset = () => {
    setCount(0);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>

      <Button label='Reset' position='left' onPress={reset}></Button>
      <Button label='+1' onPress={increment} onLongPress={reset}></Button>
       <Button label='-1' position= 'center' onPress={decrement} onLongPress={reset}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  counter: {
    color: Colors.primary,
    fontSize: FontSize.counter

  },

})