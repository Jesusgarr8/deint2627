 export interface ICoffee{
    id: number,
    title: string,
    description: string,
    ingredients: string[],
    image: string
}

type CoffeeType = {
    category:  'hot'| 'iced';
}