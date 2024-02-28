import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoComponent } from './metodo.component';

describe('MetodoComponent', () => {
  let component: MetodoComponent;
  let fixture: ComponentFixture<MetodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MetodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
