import { Text, View, StyleSheet, StatusBar, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { FontSize } from "@/constants/theme";
import NowCard from "@/components/NowCard";
import { prices } from "@/data/prices";


export default function Index() {
  const currentHour = new Date().getHours();
  const cheapestPrice = prices.reduce((minimo, precio) => {
    if(precio < minimo){
      minimo = precio
    }
    return minimo
  }, prices[0])

  const totalPrice = prices.reduce((total, precio)  =>{
    return total +  precio.price;
  },0)
  const averagePrice = totalPrice / 24;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Text>Precios por hora de hoy</Text>

      <View style={styles.flexTitle}>
      <Ionicons style={styles.title} name="flash-outline"></Ionicons>
      <Text style= {styles.title}>Luz barata</Text>
      </View>

      <NowCard now={prices[currentHour]} cheapest={cheapestPrice}  average={averagePrice}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  title:{
    fontSize: FontSize.xl

  },
  flexTitle:{
    //flex: 1,
    flexDirection: "row"
  }
});
