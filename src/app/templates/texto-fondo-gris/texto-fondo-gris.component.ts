import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-texto-fondo-gris',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './texto-fondo-gris.component.html',
  styleUrls: ['./texto-fondo-gris.component.css']
})
export class TextoFondoGrisComponent {
  constructor(
    public modalService:ModalService,
  ){}

}
