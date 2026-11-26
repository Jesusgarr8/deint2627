import CoffeeCard from "@/components/CoffeeCard";
import TypeButton from "@/components/TypeButton";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import coffeess from "@/data/coffees.json";
import { CoffeeType } from '@/types/coffee';
import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [type, setType] = useState<CoffeeType>("hot");
  const currentCoffees = coffeess[type];
  let cofeType;

  let isPressed = false

  function handlepress(titulo: string, description: string) {
    isPressed = (!isPressed)
    Alert.alert(`${titulo}`, `${description}`);

  }




  let isActive = false;
  function ordenar() {
    isActive = (!isActive)
    currentCoffees.toSorted
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Carta de cafés</Text>

      <View style={styles.buttons}>
        <TypeButton label="Calientes" icon="flame-outline" active={type === "hot"} onPress={() => setType("hot")} />
        <TypeButton label="Fríos" icon="snow-outline" active={type === "iced"} onPress={() => setType("iced")} />
        <TypeButton label="A - Z" icon="swap-vertical-outline" active={isActive} onPress={() => ordenar} />
      </View>

      <Text style={styles.numCoffe}>Número de cafes {type == "hot" ? cofeType = "calientes" : cofeType = "fríos"}  {currentCoffees.length}</Text>
      <FlatList

        data={currentCoffees}
        renderItem={({ item }) => (

          <CoffeeCard coffee={item} onPress={() => handlepress(item.title, item.description)} isPressed={isPressed} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background

  },
  titulo: {
    fontSize: FontSize.title,
    fontWeight: "bold",
    margin: 12,
  },
  buttons: {
    flexDirection: "row",
    gap: 12,
    marginHorizontal: 24,
    marginBottom: 12,
  },
  numCoffe: {
    color: Colors.text,
    fontSize: FontSize.md,
    margin: Spacing.sm
  }
});
