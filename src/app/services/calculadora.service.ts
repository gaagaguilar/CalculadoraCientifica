import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  // Operaciones básicas
  suma(a: number, b: number): number {
    return a + b;
  }

  resta(a: number, b: number): number {
    return a - b;
  }

  multiplicacion(a: number, b: number): number {
    return a * b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error("No se puede dividir por cero.");
    }
    return a / b;
  }

  // Operaciones científicas
  raizCuadrada(a: number): number {
    if (a < 0) {
      throw new Error("No se puede calcular la raíz cuadrada de un número negativo.");
    }
    return Math.sqrt(a);
  }

  logaritmo(a: number): number {
    if (a <= 0) {
      throw new Error("No se puede calcular el logaritmo de cero o números negativos.");
    }
    return Math.log(a);
  }

  seno(a: number): number {
    return Math.sin(a);
  }

  coseno(a: number): number {
    return Math.cos(a);
  }

  // Evaluar la expresión matemática
  evaluarExpresion(exp: string): number {
    try {
      // Reemplazar las funciones científicas
      exp = exp.replace(/Math\.sqrt/g, 'this.raizCuadrada');
      exp = exp.replace(/Math\.log/g, 'this.logaritmo');
      exp = exp.replace(/Math\.sin/g, 'this.seno');
      exp = exp.replace(/Math\.cos/g, 'this.coseno');
      
      // Evaluar la expresión usando eval
      return eval(exp);
    } catch (e) {
      throw new Error("Expresión inválida.");
    }
  }
}
