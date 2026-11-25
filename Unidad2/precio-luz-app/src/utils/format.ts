export function formatPrice(price: number) {
    return price.toFixed(3).replace('.', ',')
}

export function formatHour(time: number) {
  return `${String(time).padStart(2, '0')}:00`;
}

export function priceColor(price: number) {
    let color: String;
    if (price < 0.10) {
        color = 'cheap';
    }else if(price <  0.18){
        color = 'medium';
    }else{
        color = 'expensive'
    }
}