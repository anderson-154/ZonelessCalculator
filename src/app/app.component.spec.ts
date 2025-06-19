import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { throwError } from 'rxjs';

describe('AppComponent', () => {

  let fixture:ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be 2', ()=>{
    const num1 = 1;
    const num2 = 2;

    const result = num1+num2;

    expect(result).toBe(3)
  })

  it(`should have the 'zoneless-calculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router-outlet', () => {
    fixture.detectChanges();
    console.log(compiled)
    expect(compiled.querySelector('router-outlet')).not.toBe(null);
  });

  it('should render router-outlet wrapped css classes',()=>{
    const divElemnt = compiled.querySelector('div');
    const musHaveClasses = 'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(' ');
    const divClasses = divElemnt?.classList.value.split(' ');

    expect(divElemnt).not.toBe(null);


    // divElemnt?.classList.forEach(className =>{
    //   expect(musHaveClasses).toContain(className);
    // })

    musHaveClasses.forEach((className=>{
      expect(divClasses).toContain(className);
    }))
  });

  it('should contain the the buy me a beer', ()=>{
    const anchorElement = compiled.querySelector('a');
    expect(anchorElement).not.toBe(null);
    expect(anchorElement?.title).toBe('Buy me a beer');
    expect(anchorElement?.href).toBe('https://www.buymeacoffee.com/scottwindon');
    expect(anchorElement?.getAttribute('href')).toBe('https://www.buymeacoffee.com/scottwindon')
  })
});
