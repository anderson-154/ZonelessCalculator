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
});
