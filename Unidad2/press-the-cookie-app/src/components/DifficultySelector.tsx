import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Difficulty } from '../constants/game';
import { OptionButton } from './OptionButton';

interface DifficultySelectorProps {
  difficulty: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
  disabled: boolean;
}

export const DifficultySelector = ({
  difficulty,
  onSelect,
  disabled,
}: DifficultySelectorProps) => {
  return (
    <View style={styles.container}>
      <OptionButton
        label="Fácil"
        selected={difficulty === 'facil'}
        onPress={() => onSelect('facil')}
        disabled={disabled}
      />
      <OptionButton
        label="Normal"
        selected={difficulty === 'normal'}
        onPress={() => onSelect('normal')}
        disabled={disabled}
      />
      <OptionButton
        label="Difícil"
        selected={difficulty === 'dificil'}
        onPress={() => onSelect('dificil')}
        disabled={disabled}
      />

       <OptionButton
        label="Extremo"
        selected={difficulty === 'extremo'}
        onPress={() => onSelect('extremo')}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    gap: 10,
    marginVertical: 12,
  },
});