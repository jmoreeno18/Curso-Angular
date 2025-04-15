export function whatsMyType<T> ( argument: T ): T {  
    return argument
}

const amIString = whatsMyType<string>('Hola mundo')
const amINumber = whatsMyType<number>(5)

console.log(amINumber)
console.log(amIString)