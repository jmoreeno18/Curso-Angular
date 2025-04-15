

let name: string = 'Strider'; //Aqui estamos diciendo que la variable tiene que ser de tipo string


let hpPoints: number | string = '123';  // Aqui decimos que la variable puede ser o string o number

let full: number | 'FULL' = 95  // Aqui decimos que la variable puede ser o number o dentro de los strings unicamente la palabra FULL

full = 'FULL' 

let isAlive: boolean = true; 

console.log({
    name, hpPoints, isAlive
})

export{}