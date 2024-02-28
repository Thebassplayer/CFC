import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoFondoGrisComponent } from './texto-fondo-gris.component';

describe('TextoFondoGrisComponent', () => {
  let component: TextoFondoGrisComponent;
  let fixture: ComponentFixture<TextoFondoGrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TextoFondoGrisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoFondoGrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
