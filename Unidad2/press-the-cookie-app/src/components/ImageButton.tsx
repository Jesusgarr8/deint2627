import { Pressable, StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface ImageButtonsProps {
    source: ImageSourcePropType,
    size: number,
    onPress: () => void

}
export default function ImageButton({source, size, onPress}: ImageButtonsProps) {

    return (
        <View>
            <Pressable>
                <Image
                    source={source}
                    style={styles.imageGalleta}
                />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    imageGalleta: {
        width: 220,
        height: 220,
    },
})