import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-foto-y-texto',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './foto-y-texto.component.html',
  styleUrls: ['./foto-y-texto.component.css']
})
export class FotoYTextoComponent {

}
