let frutas = ["manzana", "pera", "platano", "cereza"]

//agrega un elemento al final del arreglo
frutas.push("mango")
console.log(frutas)

//agrega un elemento al inicio del arreglo
frutas.unshift("fresa")
console.log(frutas)

//elimina el último elemento del arreglo
frutas.pop()
console.log(frutas)

//elimina el primer elemento del arreglo
frutas.shift()
console.log(frutas)

//elimina el primer elemento del arreglo
frutas.shift()

console.log(frutas)

console.log(`el platano esta en la posicion ${frutas.indexOf("platano")}`)
