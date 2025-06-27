import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:false
})
export class HomePage {
  display: string = '';

  // Método para añadir un número a la pantalla
  appendNumber(number: string | number) {
    this.display += number.toString();
  }

  // Método para añadir un operador
  appendOperator(operator: string) {
    this.display += operator;
  }

  // Método para añadir funciones científicas
  appendFunction(func: string) {
    if (func === 'sqrt') {
      this.display += 'Math.sqrt(';
    } else if (func === 'log') {
      this.display += 'Math.log(';
    } else if (func === 'sin') {
      this.display += 'Math.sin(';
    } else if (func === 'cos') {
      this.display += 'Math.cos(';
    }
  }

  // Método para borrar la entrada actual
  clear() {
    this.display = '';
  }

  // Método para calcular el resultado
  calculate() {
    try {
      // Verificar que todas las funciones científicas tengan el paréntesis de cierre
      this.display = this.addClosingParentheses(this.display);

      // Evaluar la expresión
      this.display = this.evaluateMathExpression(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }

  // Añadir paréntesis de cierre si es necesario
  addClosingParentheses(expression: string): string {
    // Asegurarse de que las funciones científicas estén bien balanceadas
    if (expression.includes('Math.sqrt(') && !expression.includes(')')) {
      expression += ')';
    }
    if (expression.includes('Math.log(') && !expression.includes(')')) {
      expression += ')';
    }
    if (expression.includes('Math.sin(') && !expression.includes(')')) {
      expression += ')';
    }
    if (expression.includes('Math.cos(') && !expression.includes(')')) {
      expression += ')';
    }
    return expression;
  }

  // Evaluar la expresión con soporte para funciones matemáticas
  evaluateMathExpression(expression: string) {
    // Reemplazar las funciones científicas
    expression = expression.replace(/Math\.sqrt/g, 'Math.sqrt');
    expression = expression.replace(/Math\.log/g, 'Math.log');
    expression = expression.replace(/Math\.sin/g, 'Math.sin');
    expression = expression.replace(/Math\.cos/g, 'Math.cos');
    
    // Evaluamos la expresión usando eval (con precaución)
    return eval(expression);
  }
}
