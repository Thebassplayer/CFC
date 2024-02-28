import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoYColumnasComponent } from './texto-y-columnas.component';

describe('TextoYColumnasComponent', () => {
  let component: TextoYColumnasComponent;
  let fixture: ComponentFixture<TextoYColumnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TextoYColumnasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoYColumnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
