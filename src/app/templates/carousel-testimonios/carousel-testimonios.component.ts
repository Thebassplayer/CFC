import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

export interface testimonios{
  img:string;
  nombre:string;
  edad:string;
  texto:string;
}



@Component({
  selector: 'app-carousel-testimonios',
  standalone: true,
  imports: [CommonModule,NgbCarouselModule,NgIf],
  templateUrl: './carousel-testimonios.component.html',
  styleUrls: ['./carousel-testimonios.component.css']
})
export class CarouselTestimoniosComponent {
  
  
  public testimonios:testimonios[] = [
    {
      img:'assets/img/testimonios/juanignaciosuardi.webp',
      edad:'25 años',
      texto:'La práctica me permitió abrir mis ojos internos y habitar nuevos espacios en mi propio templo. Es impresionante como amplié mi rango de movimiento. Éste beneficio repercutió en todos mis entrenamientos y en mi salud en general. Me encuentro infinitamente agradecido.',
      nombre:'JUAN IGNACIO SUARDI'
    },
    {
      img:'assets/img/testimonios/danielamanfredi.webp',
      edad:'34 años',
      texto:'Hace 5 años me adentré en esta experiencia de habitar mi propio cuerpo. Registrar los procesos que me llevan a explorar distintos movimientos, siendo consciente de mis propias barreras, limitaciones y fortalezas.Y descubrir así la importancia de tener CONCIENCIA CORPORAL. ♡',
      nombre:' Daniela Manfredi'
    },
    {
      img:'assets/img/testimonios/mariapodesta.webp',
      edad:'33 años',
      texto:'Durante muchos años conviví con el dolor hasta que el pole me hizo darme cuenta de que tenía que trabajarlo. Comenzamos las clases de manera online y mes a mes ese dolor iba desapareciendo, cada vez adquiría más herramientas para entender mejor mi cuerpo y mis tiempos.',
      nombre:'María Podesta'
    },
    {
      img:'assets/img/testimonios/piadelbono.webp',
      edad:'50 años',
      texto:'Empecé a entrenar hace un año y medio. Llevaba más de 10 sin hacer actividad física, tiempo en el que había perdido toda la movilidad y flexibilidad. Cuando inicié este recorrido jamás imaginé que cada clase iba a representar un avance, que -a su vez- me iba a permitir entender mi cuerpo, concientizarlo y expandirlo para seguir avanzando.',
      nombre:'Pia Del Bono '
    },
    {
      img:'assets/img/testimonios/mariaceciliamaldonado.webp',
      edad:'37 años',
      texto:'Entrenar Conciencia y Flexibilidad Corporal no es sólo una práctica en sí misma, sino también un gran soporte y complemento de mi profesión y de mi vida. En su guía paso a paso y logre posturas que creía imposibles.',
      nombre:'Maria Cecilia Maldonado'
    },
    {
      img:'assets/img/testimonios/lautaro-foto-card desktop.webp',
      edad:'29 años',
      texto:'Me dedico a las artes marciales hace ya 20 años. Encontré en CFC un método completo y compatible con mi práctica, que me ayuda a evolucionar. Desde que empecé a entrenar con Mili en CFC hace 5 años mi físico y técnica mejoraron notablemente.',
      nombre:'Lautaro Ronconi Moreno'
    },
    {
      img:'assets/img/testimonios/ClaudiaRucci.webp',
      edad:'55 años',
      texto:'Mi práctica de Ashtanga Yoga ha crecido en fuerza y flexibilidad, además de alcanzar posturas como el paro de manos con facilidad y confianza. Súper profesional y cuidada su enseñanza, una guía clave para crear conciencia y hacer crecer la inteligencia del cuerpo.',
      nombre:'Claudia Rucci'
    },
    {
      img:'assets/img/testimonios/nataliawolf.webp',
      edad:'49 años',
      texto:'Hace 6 meses que practico en CFC con el objetivo de mejorar mi práctica de Ashtanga  y estoy impresionada con los cambios que logre. Estoy feliz de haber conocido a las chicas y creo que esta disciplina es un camino de ida. No me gusta entrenar en gimnasios y acá encontré un espacio espectacular con gente hermosa, las súper recomiendo!',
      nombre:'Natalia Wolf'
    }
  ];
}
