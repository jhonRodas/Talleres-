
// Taller de listas Simples Estudiantes Eder Arboleda - Jhon Henry Rodas

// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
  }
}

// Definición de la clase ListaEnlazada
class ListaEnlazada {
  constructor() {
      this.cabeza = null;
  }

  // Método para agregar un nodo al final
  agregarAlFinal(valor) {
      const nuevoNodo = new Nodo(valor);

      if (!this.cabeza) { // Si la lista está vacía
          this.cabeza = nuevoNodo;
      } else {
          let actual = this.cabeza;
          while (actual.siguiente) {
              actual = actual.siguiente;
          }
          actual.siguiente = nuevoNodo;
      }
  }

  // Método para agregar un nodo al inicio
  agregarAlInicio(valor) {
      const nuevoNodo = new Nodo(valor);
      if (this.cabeza) {
          nuevoNodo.siguiente = this.cabeza;
      }
      this.cabeza = nuevoNodo;
  }

  // Método para eliminar el último nodo
  eliminarUltimo() {
      if (!this.cabeza) {
          console.log("La lista está vacía");
          return;
      }

      if (!this.cabeza.siguiente) { // Si solo hay un nodo
          this.cabeza = null;
          return;
      }

      let actual = this.cabeza;
      while (actual.siguiente && actual.siguiente.siguiente) {
          actual = actual.siguiente;
      }
      actual.siguiente = null; // Elimina el último nodo
  }

  // Método para mostrar la lista
  mostrarLista() {
      let actual = this.cabeza;
      let resultado = '';
      while (actual) {
          resultado += actual.valor + ' -> ';
          actual = actual.siguiente;
      }
      resultado += 'null';
      console.log(resultado);
  }
}

// Ejemplo de uso
const lista = new ListaEnlazada();
lista.mostrarLista(); 
lista.agregarAlFinal(10);
lista.mostrarLista();
lista.agregarAlFinal(20);
lista.mostrarLista();
lista.agregarAlInicio(5);
lista.mostrarLista(); // Salida: 5 -> 10 -> 20 -> null
lista.eliminarUltimo();// Se elimino el ultimo nodo
lista.mostrarLista(); // Salida: 5 -> 10 -> null