import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatealoneComponent } from './formatealone.component';

describe('FormatealoneComponent', () => {
  let component: FormatealoneComponent;
  let fixture: ComponentFixture<FormatealoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormatealoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatealoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
