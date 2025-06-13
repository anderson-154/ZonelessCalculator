import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { CalculatorButtonComponent } from "../calculator-button/calculator-button.component";

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  standalone: true,
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {

  handleClick(key:string){
    console.log({key});
  }

    @HostListener('document:keyup', ['$event'])
   handleKeyboardEvent(event: KeyboardEvent){
    console.log(event, event.key)
  }
 }

