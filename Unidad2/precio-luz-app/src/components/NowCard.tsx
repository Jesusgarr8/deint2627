import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IHourPrice } from '@/data/prices'
import { formatHour, formatPrice } from '@/utils/format'
import { Colors, FontSize, Radius, Spacing } from '@/constants/theme'

interface IPropsNowCard {
    now: IHourPrice,
    cheapest: IHourPrice,
    average: number,
}
export default function NowCard({ now, cheapest, average }: IPropsNowCard) {
    return (
        <View style={styles.card}>
            <Text style={styles.currentText}>Ahora  - {formatHour(now.hour)}</Text>

            <View style={styles.flexPrice}>
                <Text style={styles.price}>{formatPrice(now.price)}</Text>
                <Text style={{ color: Colors.white }}> €/kWh</Text>
            </View>

            <View style={styles.cajas}>
                <View style={styles.caja}>
                    <Text>Más barata</Text>
                    <Text>{formatHour(cheapest.hour)} - {formatPrice(cheapest.price)}</Text>
                </View>
                <View style={styles.caja}>
                    <Text>Media del día</Text>
                    <Text>{formatPrice(average)}</Text>
                </View>
            </View>

            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.dark,
    },
    currentText: {
        color: Colors.white,
        fontSize: FontSize.sm
    },
    price: {
        color: Colors.white,
        fontSize: FontSize.xl
    },
    flexPrice: {
        flexDirection: "row",
        alignItems: "baseline"
    },
    caja: {
        flex: 1,
        backgroundColor: Colors.muted,
        borderRadius: Radius.sm,

    },
    cajas: {
        flexDirection: "row",
        gap: Spacing.md
    }
})