
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre} Edad: ${this.edad}`;
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `La persona es mayor de edad`;
        } else {
            return `La persona es menor de edad`;
        }
    }
}

let persona = new Persona('Jhon Henry', 54);

console.log(persona.mostrarDatos());

console.log(persona.esMayorDeEdad());

