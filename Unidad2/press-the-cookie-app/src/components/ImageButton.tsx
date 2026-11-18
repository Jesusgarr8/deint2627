import { Pressable, StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface ImageButtonsProps {
    source: ImageSourcePropType,
    size: number,
    onPress: () => void,
    disabled: boolean

}
export default function ImageButton({ source, size, onPress, disabled }: ImageButtonsProps) {

    const handlePress = () => {
        onPress?.();
    }

    return (
        <View>
            <Pressable
                onPress={handlePress}
                disabled={disabled}
                style={styles.contenedor} >

                <Image
                    source={source}
                    style={styles.galleta}
                />

                {disabled && <View style={styles.overlayOscuro} />}
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
  contenedor: {
    width: 220,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 220 / 2, 
    overflow: 'hidden',        
  },
  galleta: {
    width: '100%',
    height: '100%',
  },
  
  overlayOscuro: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.55)', 
  },
});