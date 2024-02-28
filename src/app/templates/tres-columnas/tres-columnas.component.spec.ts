import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresColumnasComponent } from './tres-columnas.component';

describe('TresColumnasComponent', () => {
  let component: TresColumnasComponent;
  let fixture: ComponentFixture<TresColumnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TresColumnasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TresColumnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
