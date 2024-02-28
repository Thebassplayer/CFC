import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoYTextoComponent } from './templates/foto-y-texto/foto-y-texto.component';
import { HeaderComponent } from "./templates/header/header.component";
import { TestimoniosComponent } from './templates/testimonios/testimonios.component';
import { TextoFondoGrisComponent } from './templates/texto-fondo-gris/texto-fondo-gris.component';
import { TextoYColumnasComponent } from './templates/texto-y-columnas/texto-y-columnas.component';
import { TresColumnasComponent } from './templates/tres-columnas/tres-columnas.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselTestimoniosComponent } from './templates/carousel-testimonios/carousel-testimonios.component';
import { MetodoComponent } from './templates/metodo/metodo.component';
import { FooterComponent } from './templates/footer/footer.component';
import { QuienesSomosComponent } from './templates/quienes-somos/quienes-somos.component';
import { FormatealoneComponent } from './templates/formatealone/formatealone.component';
import { HeaderMobileComponent } from './templates/header-mobile/header-mobile.component';
import { ModalComponent } from './templates/modal/modal.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        
        
       
    ],
    providers: [NgbActiveModal],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        TextoYColumnasComponent,
        TextoFondoGrisComponent,
        FotoYTextoComponent,
        TresColumnasComponent,
        TestimoniosComponent,
        NgbModule,
        CarouselTestimoniosComponent,
        MetodoComponent,
        FooterComponent,
        QuienesSomosComponent,
        FormatealoneComponent,
        HeaderMobileComponent,
        ModalComponent,
        HttpClientModule
       
        
    ]
})
export class AppModule { }
