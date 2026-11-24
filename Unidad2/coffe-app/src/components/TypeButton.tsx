import { Colors, FontSize } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type IconName = ComponentProps<typeof Ionicons>["name"];

interface IPropsButton {
    label: string,
    icon: IconName,
    active: boolean,
    onPress: () => void,
}
export default function TypeButton({ label, icon, active, onPress }: IPropsButton) {

    return (
        <Pressable
            onPress={onPress}
            style={[styles.button, active && styles.buttonActive]}>
            <Ionicons name={icon} size={18} color={active ? Colors.chip : Colors.primary} />
            <Text style={[styles.label, { color: active ? Colors.chip : Colors.primary }]}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: Colors.chip,
    },
    buttonActive: {
        backgroundColor: Colors.primary,
    },
    label: {
        fontSize: FontSize.md,
        fontWeight: '600',
    },
})