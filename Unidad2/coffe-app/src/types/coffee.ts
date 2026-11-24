export interface ICoffee {
    id: number,
    title: string,
    description: string,
    ingredients: string[],
    image: string
}

export type CoffeeType = 'hot' | 'iced';