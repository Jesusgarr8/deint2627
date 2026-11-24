import CoffeeCard from "@/components/CoffeeCard";
import TypeButton from "@/components/TypeButton";
import { Colors, FontSize } from "@/constants/theme";
import coffeess from "@/data/coffees.json";
import { CoffeeType } from '@/types/coffee';
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [type, setType] = useState<CoffeeType>("hot");
  const currentCoffees = coffeess[type];
  //const cofess: ICoffee[] = coffeess
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Carta de cafés</Text>

      <View style={styles.buttons}>
        <TypeButton label="Calientes" icon="flame-outline" active={type === "hot"} onPress={() => setType("hot")} />
        <TypeButton label="Fríos" icon="snow-outline" active={type === "iced"} onPress={() => setType("iced")} />
      </View>

      <FlatList
        data={currentCoffees}
        renderItem={({ item }) => (
          <CoffeeCard coffee={item} />
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
});
