import { Component } from '@angular/core';
import { LayoutComponent } from '../../pages/layout/layout.component';
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LayoutComponent,NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {

  colorear: number = 0;

  cambiarColor(valor: number) {
    this.colorear = valor;
  }

  constructor(private LayoutComponent:LayoutComponent) {}

  setMostrar(value: number) {
    this.LayoutComponent.setMostrar(value);
  }

  ejecutarAcciones(valor: number) {
    this.setMostrar(valor);
    this.cambiarColor(valor);
  }
  

}
