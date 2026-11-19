import { Colors, FontSize, Radius, Spacing } from '@/constants/theme';
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
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
 button: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: Radius.pill,
    borderWidth: 1,
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
  },
  selectedButton: {
    backgroundColor: Colors.primary,
    borderColor: Colors.white,
  },
  disabledButton: {
    opacity: 0.5,
  },
  label: {
    fontSize: FontSize.button,
    color: Colors.white,
    fontWeight: 'semibold',
  },
  selectedLabel: {
    color: Colors.white,
  },
});