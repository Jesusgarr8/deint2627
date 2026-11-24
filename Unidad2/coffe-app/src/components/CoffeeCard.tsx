import { Colors, FontSize, Radius } from '@/constants/theme'
import { ICoffee } from '@/types/coffee'
import { Image, StyleSheet, Text, View } from 'react-native'

interface ICoffeeCard {
    coffee: ICoffee
}

export default function CoffeeCard({ coffee }: ICoffeeCard) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: coffee.image }} resizeMode="cover" />

            <View style={styles.info}>
                <Text style={styles.title}>{coffee.title}</Text>
                <Text style={styles.ingredients}>{coffee.ingredients.join(' - ')}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {coffee.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.card,
        padding: 8,
        marginVertical: 5,
        gap: 12,
        borderRadius: 14,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: Radius.md,
        backgroundColor: Colors.chip,
    },
    info: {
        flex: 1,
        minWidth: 0,
        gap: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.primary,
    },
    ingredients: {
        fontSize: FontSize.md,
        fontWeight: '600',
        color: Colors.primary,
    },
    description: {
        fontSize: FontSize.sm,
        lineHeight: 17,
        color: Colors.muted,
    },
})