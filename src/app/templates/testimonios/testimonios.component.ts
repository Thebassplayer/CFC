import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselTestimoniosComponent } from '../carousel-testimonios/carousel-testimonios.component';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule,CarouselTestimoniosComponent],
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {

}
