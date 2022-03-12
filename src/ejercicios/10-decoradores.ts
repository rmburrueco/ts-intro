/*
    ===== Código de TypeScript =====
*/


// Decoradores para cambiar las clases para añadir funcionalidades especiales
function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class BugReport {
    type = "report";
    title: string;
    public miPropiedad: string = 'ABC123';

    constructor(t: string) {
        this.title = t;
    }

    imprimir() {
        console.log('Hola Mundo');
    }
}


class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(BugReport);