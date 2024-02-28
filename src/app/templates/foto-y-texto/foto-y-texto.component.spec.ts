import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoYTextoComponent } from './foto-y-texto.component';

describe('FotoYTextoComponent', () => {
  let component: FotoYTextoComponent;
  let fixture: ComponentFixture<FotoYTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FotoYTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoYTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
