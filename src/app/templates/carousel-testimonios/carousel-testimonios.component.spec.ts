import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTestimoniosComponent } from './carousel-testimonios.component';

describe('CarouselTestimoniosComponent', () => {
  let component: CarouselTestimoniosComponent;
  let fixture: ComponentFixture<CarouselTestimoniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CarouselTestimoniosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTestimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
