import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-formatealone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formatealone.component.html',
  styleUrls: ['./formatealone.component.css']
})
export class FormatealoneComponent {

  constructor(
    public modalService:ModalService,
  ){}

}
