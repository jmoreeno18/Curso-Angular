function addNumber(a: number, b: number) {
    return a + b
}

const result: number = addNumber(1 , 2)
console.log({result})

//Para que la suma de una funcion de el resultado en un String

const addNumberArrow = (a: number, b:number):string => {
    return `${ a + b }`
}

const result2 = addNumberArrow(3 , 4)

console.log({result2})

const multiply = (firstNumber: number, secondNumber?: number, base: number = 2) => {
    return firstNumber * base
}

const result3 = multiply(4)

console.log({result3})