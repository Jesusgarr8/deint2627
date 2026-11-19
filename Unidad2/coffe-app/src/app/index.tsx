import CoffeeCard from "@/components/CoffeeCard";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import coffeess from "@/data/coffees.json";
import { ICoffee } from '@/types/coffee'
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  //const cofess: ICoffee[] = coffeess
  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>

       <FlatList
  data={coffeess.hot}
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
    alignItems: "center",
    justifyContent: "center",
  },
});
