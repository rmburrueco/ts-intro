/*
    ===== Código de TypeScript =====
*/


interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}
interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// desestructaración
const autor = 'Fulano';
// const { volumen, segundo, cancion, detalles:{ autor: autorDetalle } } = reproductor;
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor : autorDetalle} = detalles;

// console.log('El volumen actual de: ', volumen);
// console.log('El segundo actual de: ', segundo);
// console.log('El canción actual de: ', cancion);
// console.log('El autor es: ', autorDetalle);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [ p1, p2, p3 ] = dbz;
const [ , , p3 ] = dbz;

// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);

