class Goku {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        //nivel actual de la transformacion
        this.nivel = nivel;
    }

    //metodos
    mostarTransformacion() {
        return `${this.nombre} esta en la transformacion: ${this.nivel}`;
    }

    trasnformar(nuevaTransformacion)
    {
        this.nivel = nuevaTransformacion;
        return `${this.nombre} se ha transformado en: ${this.nivel}!`;
    }

    volverFormaBase(){
        this.nivel = 'Base';
        return `${this.nombre} ha vuelto a sus forma base.`;
    }
}

let goku = new Goku('goku', 'base');
console.log(goku);
console.log(goku.mostarTransformacion());
console.log(goku.trasnformar('Super Sayayin'));
console.log(goku.volverFormaBase());

class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return `El área del rectángulo es: ${this.base * this.altura}`;
    }

    calcularPerimetro() {
        return `El perímetro del rectángulo es: ${2 * this.base + 2 * this.altura}`;
    }
}

let rectangulo = new Rectangulo(5, 10);

console.log(rectangulo.calcularArea());

console.log(rectangulo.calcularPerimetro());

console.log(rectangulo);

