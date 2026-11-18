import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface OptionButtonProps {
  label: string;
  selected?: boolean;
  onPress: () => void;
  disabled?: boolean;
}

export const OptionButton = ({ label, selected, onPress, disabled }: OptionButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        selected && styles.selectedButton,
        disabled && styles.disabledButton,
      ]}
    >
      <Text
        style={[
          styles.label,
          selected && styles.selectedLabel,
          disabled && styles.disabledLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    borderColor: '#2e7d32',     // Borde verde
    backgroundColor: '#e8f5e9', // Fondo verde suave
  },
  disabledButton: {
    opacity: 0.5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  selectedLabel: {
    color: '#2e7d32',           // Texto verde
  },
  disabledLabel: {
    color: '#aaa',
  },
});