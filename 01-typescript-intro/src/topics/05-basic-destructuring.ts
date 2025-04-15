// Desestructuracion de Objetos

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const { audioVolume, songDuration, song, details: { author, year } } = audioPlayer;


console.log("Song:", song);
console.log("Volume:", audioVolume);
console.log("Duration:", songDuration);
console.log("Author:", author);
console.log("Year:", year);


// Desestructuracion de arrays

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3]: string[] = ['Messi', 'Cristiano', 'Neymar']

console.log('Personaje 3: ', dbz[2])
console.log('Personaje 1: ', p1, 'Personaje 2: ', p2, 'Personaje 3: ', p3)


// Desestructuracion de funciones

interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0,
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0,
}

const { price: phonePrice } = phone
const { price: phoneTablet } = tablet

interface taxCalculationOptions {
    tax: number;
    products: Product[]
}


function taxCalculation( options: taxCalculationOptions ): number[] {

    let total = 0;

    options.products.forEach( ({ price }) => {
        total += price
    })

    return [total, total * options.tax]
}


const shoppingCart = [phone, tablet]
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

console.log('Total', total)
console.log('Total', taxTotal)