/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}


// Las clases me sirven para crear instancias 
class Heroe extends PersonaNormal{
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ){
            super( nombreReal, 'New York, USA' );
         }
}

const iroman = new Heroe('Ironman',45,'Tony');

console.log(iroman);


