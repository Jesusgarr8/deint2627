import { Colors, FontSize } from "@/constants/theme";
import { Text, View, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { useState } from "react";
import * as Haptics from "expo-haptics";
import Boton from "@/components/Boton";
import { StatusBar } from "expo-status-bar"
import CounterCard from "@/components/CounterCard";
import ResultCard from "@/components/ResultCard";
import Reiniciar from "@/components/Reiniciar";

export default function Index() {
  const [countPrecio, setCountPrecio] = useState<number>(1);

  const incrementPrecio = () => {
    setCountPrecio(countPrecio + 1)
    let newCount = countPrecio + 1
    newCount % 10 == 0 && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  const incrementLongPrecio = () => {
    setCountPrecio(countPrecio + 5)
    let newCount = countPrecio + 5
    //newCount % 10 == 0 && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  const decrementPrecio = () => {
    if (countPrecio > 1)
      setCountPrecio(countPrecio - 1)
  }
  const decrementLongPrecio = () => {
    if (countPrecio > 5)
      setCountPrecio(countPrecio - 5)
  }

  const [count, setCount] = useState<number>(1);

  const incrementPersona = () => {
    setCount(count + 1)
    let newCount = countPrecio + 1
    newCount % 10 == 0 && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  const incrementLongPersona = () => {
    setCount(count + 2)
    let newCount = countPrecio + 2
    //newCount % 10 == 0 && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  const decrementPersona = () => {
    if (count > 1)
      setCount(count- 1)
  }

  const decrementLongPersona = () => {
    if (count > 2)
      setCount(count- 2)
  }

  const calculoResultado = (countPrecio / count).toLocaleString("es-ES", { style: "currency", currency: "EUR" })
  
  const handleReset = () => {
    setCount(1)
    setCountPrecio(1)
  }
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Ionicons name="cash-outline" size={60} style={styles.title} />
        <Text style={styles.title}>Splitz EZ</Text>
      </View>
      <CounterCard title='Cuenta' count={countPrecio} text='€' increment={incrementPrecio} decrement={decrementPrecio} incrementLong={incrementLongPrecio} decrementLong={decrementLongPrecio}/>
      <CounterCard title='Persona' count={count} text='' increment={incrementPersona} decrement={decrementPersona} incrementLong={incrementLongPersona} decrementLong={decrementLongPersona} />
   
    <ResultCard resultado = {calculoResultado}/> 
    <Reiniciar onPress={handleReset}/>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",

  },
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    //alignItems: "center",

  },
  title: {
    color: Colors.primary,
    fontSize: FontSize.counter
  },

  texto: {
    color: Colors.primary,
    fontSize: FontSize.button
  }
});
