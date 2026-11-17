import BotonDificultad from "@/components/BotonDificultad";
import BotonStart from "@/components/BotonStart";
import ImageButton from "@/components/ImageButton";
import { Colors, FontSize } from "@/constants/theme";
import { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1)
   
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('../../assets/images/boton.png')}
          style={styles.imageBoton}
        />

        <Text style={styles.title}>Press the cookie</Text>
      </View>

      <View style={styles.botonesDificultad}>
        <BotonDificultad />
        <BotonDificultad />
        <BotonDificultad />
      </View>
      <ImageButton source={require ('@/assets/images/galleta.png')} size={2} onPress={increment}/>

      <BotonStart />

      <View style={styles.botonesDificultad}>
        <Text style={styles.texto}>Tiempo</Text>
        <Text style={styles.texto}>Pulsaciones</Text>
        <Text style={styles.texto}>{count}</Text>
        
      </View>

    </SafeAreaView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.background,
    paddingVertical: 24,
  },
  imageBoton: {
    width: 64,
    height: 64,
  }, imageGalleta: {
    width: 220,
    height: 220,

  },
  title: {
    color: Colors.primary,
    fontSize: FontSize.title,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  botonesDificultad: {
    flex: 1,
    flexDirection: "row",
    gap: 15,
  },
  texto: {
    color: Colors.white,
    fontSize: FontSize.texto,
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  }

});
