import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError,throwError} from 'rxjs';
import {Email} from './email';



@Injectable({
  providedIn: 'root'
})

export class EmailService {
  
  public servidor:string= 'localhost/tampletes/server/'; 
  

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  } 

  

  mandarEmail(email:Email){
    const url = this.servidor+'send.php'; // URL to web api
    const options = new HttpParams()
      .set('nombre', email.nombre)
      //.set('apellido', email.apellido)
      .set('celular', email.celular)
      .set('email', email.email)
      //.set('que', email.quequiere)
    ;
    return this.http.post(url,options)
      .pipe(
        catchError(this.handleError)
      )
  }

  constructor(
    private http: HttpClient,
  ) {
    //this.servidor = 'https://alihuenalto.com.ar/server/contact/';
    this.servidor = 'https://cfcmethod.com/server/contact/';
    
  }
}
