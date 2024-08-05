import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../pages/layout/layout.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LayoutComponent,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  mostrar: number = 0;
  textos: string[] = ['Home', 'Profiles', 'Projects', 'Tasks', 'Subtasks', 'Issues', 'Comments'];

  mirando: number = 0;
  textos2: string[] = [' ','Projects-Details', 'Tasks-Details', 'Subtasks-Details', 'Issues-Details', 'Comments-Details'];
 
  constructor(private LayoutComponent: LayoutComponent) {}

  setMostrar(value: number) {
    this.LayoutComponent.setMostrar(value);
  }

  setMirando(value: number) {
    this.LayoutComponent.setMirando(value);
  }

  ngOnInit() {
    this.LayoutComponent.mostrar$.subscribe(valor => {
        this.mostrar = valor;
    });


    this.LayoutComponent.mirando$.subscribe(valor => {
      this.mirando = valor;
    });

  }
  
}
