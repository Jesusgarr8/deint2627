import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ICoffee } from '@/types/coffee'
import { Colors, FontSize, Radius } from '@/constants/theme'

interface ICoffeCard {
    coffee: ICoffee,
}
export default function CoffeeCard({ coffee }: ICoffeCard) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: coffee.image }} resizeMode='cover' />

            <View>
                <Text style={styles.title}>{coffee.title}</Text>
                <Text style={styles.ingredients}>{coffee.ingredients.map((ingredient) =>
                    ingredient + ' - ')}</Text>
                <Text>{coffee.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 5,
        backgroundColor: Colors.card,
        padding: 15,
        gap: 10
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: Radius.md
    },
    title: {
        fontSize: FontSize.title,
        fontWeight: "bold"
    },
    description: {
        fontSize: FontSize.sm,
        color: Colors.muted
    },
    ingredients: {
        fontSize: FontSize.md,
        color: Colors.primary,
        fontWeight: "semibold"
    }
})