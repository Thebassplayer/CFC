import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalService } from 'src/app/services/modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/services/email.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule,LoaderComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
 
  
  constructor(
    public modalService:ModalService,
    public activeModal: NgbActiveModal,
    public emailService:EmailService
    
    ) {
      this.emailForm = new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
        email: new FormControl('',[Validators.required,Validators.email]),
        celular: new FormControl('',[Validators.required,Validators.minLength(5)]),
      });
      
    }
    public enviando:boolean = false;   
    public emailOk:number = 0;
    public emailForm : any;
    
    
    get nombre() { return this.emailForm.get('nombre'); }
    get celular() { return this.emailForm.get('celular'); }
    get email() { return this.emailForm.get('email'); }
   
    
    
  
    onSubmit() {
      console.warn(this.emailForm.value);
      this.enviando = true;
      this.emailService.mandarEmail(this.emailForm.value)
       .subscribe(respuesta=>{
         console.log(respuesta);
         if(respuesta===1){
           this.emailOk = 1;
         }else if(respuesta===0){
           this.emailOk = 2;
         }
         this.enviando = false;
       })
     }
      
  
   
  
}
