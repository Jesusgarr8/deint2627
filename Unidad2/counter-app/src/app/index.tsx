import { Colors } from "@/constants/theme";
import { useState } from "react";
import { Text, View, StyleSheet, Switch, Pressable, Alert } from "react-native";

export default function Index() {
   const [goldenPoint, setGoldenPoint] = useState(true);

   const handleAlert = () => {
    Alert.alert("Nuevo partido"
  )

    
   }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit src/app/index.tsx to edit this screen.</Text>
     

      <Switch
        value={goldenPoint}
        onValueChange={setGoldenPoint}
        trackColor={{ true: Colors.primary, false: Colors.primaryPressed }}
        style={styles.switch}
      />
      <Pressable onPress = {handleAlert}>
        <Text>Reiniciar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.text,
    textAlign: "center",
  },
  switch: {
    alignSelf: "center"
  }
});
