import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../templates/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalService: NgbModal
   
  ) {}
  closeResult = '';

  open() {
		this.modalService.open(ModalComponent);
	}
  close() {
		this.modalService.open(ModalComponent);
	}
  

}
