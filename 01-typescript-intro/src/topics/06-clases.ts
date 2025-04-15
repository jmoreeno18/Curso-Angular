export class Person {
    // public name: string;
    // private address: string;
    constructor(
        public name: string,
        private address: string
    ) {
        this.name = name;
        this.address = address;
    }
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super( realName, 'Alicante' )
    }
}

const ironman = new Person('Javier', 'Alicante')
const ironman2 = new Hero('Batman', 24, 'Javier')

console.log(ironman)
console.log(ironman2)