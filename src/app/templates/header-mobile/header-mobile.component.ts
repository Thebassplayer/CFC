import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,ModalComponent],
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent {
  constructor(
    public modalService:ModalService
  ) {}
}
