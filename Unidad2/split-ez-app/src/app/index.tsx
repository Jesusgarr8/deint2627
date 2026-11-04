import { Colors, FontSize } from "@/constants/theme";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@react-native-vector-icons/ionicons";

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>

      <View style={styles.container}>
        <Ionicons name="cash-outline" size={60} style={styles.title} />
        <Text style={styles.title}>Splitz EZ</Text>
        <View style={styles.tarjeta} >
          <Text>Cuenta</Text>
          <Text>hola</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    padding: 10
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.background
  },
  title: {
    color: Colors.primary,
    fontSize: FontSize.counter
  },
  tarjeta: {
    backgroundColor: Colors.tarjeta,
    flexDirection: 'row',
    flex: 1,
  },
  texto: {
    color: Colors.text
  }
});
