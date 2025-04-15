const skills: string[] = ['Bash', 'Counter', 'Healing']



const strider = {  //Aqui no se podria poner el tipado fuerte en ninguna de las variables que compone el objeto
    name: 'Strider',
    hp: '100',
    skills: ['Bash', 'Counter']
}

interface Hola {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;    //Es opcional
}

const strider2: Hola = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    
}

strider2.hometown = 'Rivendell'

console.log(strider2)


export{}