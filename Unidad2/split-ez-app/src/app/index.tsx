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

export default function Index() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1)
    let newCount = count + 1
    newCount % 10 == 0 && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  const decrement = () => {
    if (count > 0)
      setCount(count - 1)
  }
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Ionicons name="cash-outline" size={60} style={styles.title} />
        <Text style={styles.title}>Splitz EZ</Text>
      </View>
      <CounterCard title='Cuenta' count={count} text='€' increment={increment} decrement={decrement} />
      <CounterCard title='Persona' count={count} text='' increment={increment} decrement={decrement} />


      <ResultCard />

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
