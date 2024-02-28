import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tres-columnas',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage,NgbCollapseModule],
  templateUrl: './tres-columnas.component.html',
  styleUrls: ['./tres-columnas.component.css']
})
export class TresColumnasComponent {
  public txt = "ver más...";
  public isCollapsed = false;
  toggletext(){
    this.isCollapsed = !this.isCollapsed;
    if(this.isCollapsed){
      this.txt = "ver menos...";
    }else{
      this.txt = "ver más...";
    }
  }
}
