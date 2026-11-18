import BotonStart from "@/components/ActionButton";
import ImageButton from "@/components/ImageButton";
import { Colors, FontSize } from "@/constants/theme";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionButton from "@/components/ActionButton";
import { Difficulty, GAME_TIME } from '../constants/game';
import { DifficultySelector } from "@/components/DifficultySelector";

export default function Index() {
  const [clicks, setClicks] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME['normal']);
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  

  const increment = () => {
    if (isPlaying) {
      setClicks(clicks + 1)
    }
  }

  const iniciarJuego = () => {
    setClicks(0)
    setIsPlaying(true)
     setTimeLeft(GAME_TIME[difficulty]);
  }



const handleSelectDifficulty = (newDifficulty: Difficulty) => {
  setDifficulty(newDifficulty);
  setTimeLeft(GAME_TIME[newDifficulty]);
};


const handleStop = () => {
  setIsPlaying(false);
  setTimeLeft(GAME_TIME[difficulty]); // <-- Antes tenías 10
};



  useEffect(() => {
    // 1. Si no se está jugando, sal sin hacer nada
    if (!isPlaying) return;
    // 2. Arranca el temporizador: cada segundo, resta 1 a timeLeft
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // Detiene el intervalo al llegar a 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 3. Limpieza: para el temporizador
    return () => clearInterval(interval);
  }, [isPlaying]);


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Image
          source={require('../../assets/images/boton.png')}
          style={styles.imageBoton}
        />

        <Text style={styles.title}>Press the cookie</Text>
      </View>

      <DifficultySelector
  difficulty={difficulty}
  onSelect={handleSelectDifficulty}
  disabled={isPlaying}
/>
      <ImageButton source={require('@/assets/images/galleta.png')} size={2} onPress={increment} disabled={!isPlaying} />

      <ActionButton
        icon={isPlaying ? "stop-circle-outline" : "play-circle-outline"}
        label={isPlaying ? "Stop" : "Start"}
        color={isPlaying ? Colors.danger : Colors.primary}
        onPress={iniciarJuego} />

      <View style={styles.botonesDificultad}>

        <View style={styles.statBox}>
          <Text style={styles.texto}>Tiempo</Text>
          <Text style={styles.textoTiempo}>00:{String(timeLeft).padStart(2, "0")}</Text>


        </View >

        <View style={styles.statBox}>

          <Text style={styles.texto}>Pulsaciones</Text>
          <Text style={styles.textoClicks}>{clicks}</Text>
        </View>

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
  },
  textoTiempo: {
    color: Colors.white,
    fontSize: FontSize.contadores
  },
  textoClicks: {
    color: Colors.primary,
    fontSize: FontSize.contadores
  },
  statBox: {
    alignItems: 'center',
    minWidth: 100,
  }, contadorees: {
    flex: 1,
    flexDirection: "row"
  }


});
