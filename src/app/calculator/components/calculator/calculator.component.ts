import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from "../calculator-button/calculator-button.component";
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  standalone: true,
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
})
export class CalculatorComponent {

  private calculatorService = inject(CalculatorService);
  public  resultText = computed(()=> this.calculatorService.resultText());
  public  subResultText = computed(()=> this.calculatorService.subResultText());
  public  lastOperator = computed(()=> this.calculatorService.lastOperator());


  public calculatorsButtons = viewChildren(CalculatorButtonComponent);
  handleClick(key:string){
    this.calculatorService.constructNumber(key)
  }

  //@HostListener('document:keyup', ['$event'])
   handleKeyboardEvent(event: KeyboardEvent){
    const keyEquivalents : Record<string, string> ={
      Escape: 'C',
      Clear: 'C',
      '*': 'X',
      '/': '÷',
      Enter: '='

    }
    const key = event.key;
    const keyValue = keyEquivalents[key]?? key;
    this.handleClick(keyValue);

    this.calculatorsButtons().forEach(button =>{
      button.keyboardPressedStyle(keyValue)
    })
  }
 }

