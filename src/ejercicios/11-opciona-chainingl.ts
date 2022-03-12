/*
    ===== Código de TypeScript =====
*/

// Encadenamiento opcional

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Rosa',
    hijos: ['Elena', 'Mario']
}

function imprimeHijos( pasajero: Pasajero ): void {

    const cuantosHijos = pasajero.hijos?.length || 0; //Si es undefined o null pues devuelve 0

    console.log( cuantosHijos );
}

imprimeHijos( pasajero1 );