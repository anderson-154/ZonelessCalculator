import { Injectable, signal } from '@angular/core';


const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/',];
const specialOperators = [
  '+/-',
  '%',
  '.',
  '=',
  'C',
  'Backspace'

]

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public resultText = signal('0')
  public subResultText = signal('0')
  public lastOperator = signal('')

  public constructNumber(value: string): void {
    if (![...numbers, ...operators, ...specialOperators].includes(value)) {
      console.log('Invalid INPUT', value);
      return;
    }

    if (value == '=') {
      console.log('Calcular resultado', value);
      return;
    }

    if (value == 'C') {
      this.resultText.set('0')
      this.subResultText.set('0')
      this.lastOperator.set('')
      console.log('Calcular resultado', value);
      return;
    }

    //TODO revisar cuando tengamos numeros negativos
    if (value == 'Backspace') {
      if (this.resultText() == '0') return;
      if (this.resultText().length == 1) {
        this.resultText.set('0')
        return;
      }
      this.resultText.update(v => v.slice(0, -1))
      return;
    }

    if (operators.includes(value)) {
      this.lastOperator.set(value)
      this.subResultText.set(this.resultText())
      this.resultText.set('0')
      return;
    }

    if(this.resultText().length >= 10){
      console.log('Max length reach')
      return;
    }

    if (value == '.' && !this.resultText().includes('.')) {
      if (this.resultText() == '0' || this.resultText() == '') {
        this.resultText.set('0.')
        return;
      }
      this.resultText.update(text => text + '.')
      return;
    }

    //manejo de ceros
    if(value == '0' && (this.resultText()=='0' || this.resultText()=='-0')){
      return;
    }

    if(value == '+/-'){
      if(this.resultText().includes('-')){
        this.resultText.update(text =>text.slice(1))
        return;
      }
      this.resultText.update(text => text + value)
      return;
    }


    if(numbers.includes(value)){
      if(this.resultText()== '0'){
        this.resultText.set(value)
        return;
      }

      if(this.resultText()== '-0'){
          this.resultText.set('-' + value);
          return;
      }
    }
    this.resultText.update(text => text+value);
  }
}
