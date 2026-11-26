import ActionButton from "@/components/ActionButton";
import AppHeader from "@/components/AppHeader";
import { DifficultySelector } from "@/components/DifficultySelector";
import ImageButton from "@/components/ImageButton";
import StatBox from "@/components/StatBox";
import { Difficulty, GAME_TIME } from "@/constants/game";
import { Colors, FontSize, Spacing } from "@/constants/theme";
import * as Haptics from "expo-haptics";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [clicks, setClicks] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME["normal"]);
  const [cuentaAtras, setCuentaAtras] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>("normal");
  const [record, setRecord] = useState(0);

  const seconds = (GAME_TIME[difficulty]);
  let listaPartidas = [];
  const increment = () => {
    if (!isPlaying) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setClicks((prev) => prev + 1);
  };

  const handleStart = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setClicks(0);
    setTimeLeft(GAME_TIME[difficulty]);
    setIsPlaying(true);
  };

  const handleStop = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsPlaying(false);
    setTimeLeft(GAME_TIME[difficulty]);
  };

  const handleActionPress = () => {
    if (isPlaying) {
      handleStop();
    } else {
      setCuentaAtras(3)
      
         const interval = setInterval(() => {
      setCuentaAtras((prev) => Math.max(prev - 1, 0));
    }, 1000);

    if(cuentaAtras <= 0){
      handleStart();

    }
    }
  };

  const handleSelectDifficulty = (newDifficulty: Difficulty) => {
    setDifficulty(newDifficulty);
    setTimeLeft(GAME_TIME[newDifficulty]);
  };


  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);



  useEffect(() => {
    if (isPlaying && timeLeft === 0) {
      setIsPlaying(false);
      if (clicks > record) {
        setRecord(clicks)
      }
      listaPartidas = [clicks, seconds]
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert("¡Tiempo!", `Has pulsado la galleta ${clicks} veces.`);
    }
  }, [timeLeft, isPlaying, clicks]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <AppHeader
        logo={require("@/assets/images/boton.png")}
        title="Press the cookie"
      />
        <Text style={styles.cuentaAtras}> Cuenta atras: {cuentaAtras}</Text>
      <DifficultySelector
        difficulty={difficulty}
        onSelect={handleSelectDifficulty}
        disabled={isPlaying}
      />

      <ImageButton
        source={require("@/assets/images/galleta.png")}
        size={220}
        onPress={increment}
        disabled={!isPlaying}
      />

      <ActionButton
        icon={isPlaying ? "stop-circle-outline" : "play-circle-outline"}
        label={isPlaying ? "Stop" : "Start"}
        color={isPlaying ? Colors.danger : Colors.primary}
        onPress={handleActionPress}
      />

      <View style={styles.info}>
        <StatBox
          label="Tiempo"
          value={`00:${String(timeLeft).padStart(2, "0")}`}
        />
        <StatBox
          label="Pulsaciones"
          value={clicks}
          valueColor={Colors.highlight}
        />
      </View>

      <Text style={styles.texto}>Record {record}</Text>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.background,
    paddingVertical: Spacing.lg,
  },
  info: {
    flexDirection: "row",
    gap: Spacing.lg,
  },
  texto: {
    color: Colors.text,
    fontSize: FontSize.texto
  },
  cuentaAtras:{
    color: Colors.danger,
    fontSize: FontSize.texto
  }
});