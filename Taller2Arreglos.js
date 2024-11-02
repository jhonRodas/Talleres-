let altura = [ 1.81, 1.85, 1.78, 1.93, 1.85]
  console.log (altura)

  let sumatorio = altura[0] + altura[1] + altura[2] + altura[3] + altura[4]
let promedio = sumatorio / altura.length


let masAltas = 0;
let masBajas = 0;

for (let persona = 0; persona < altura.length; 1) {

    if (altura[persona] > promedio) {
        masAltas++;

    } else if (altura[persona] < promedio) {
        masBajas++;
    }
    persona++;

}

console.log(`
    El promedio de altura es ${promedio} cm,  
    ${masAltas} personas son más altas que el promedio 
    y ${masBajas} personas son más bajas que el promedio
    `)
