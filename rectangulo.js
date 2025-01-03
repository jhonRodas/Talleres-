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

let rectangulo = new Rectangulo(10, 20);

console.log(rectangulo.calcularArea());

console.log(rectangulo.calcularPerimetro());

console.log(rectangulo);

