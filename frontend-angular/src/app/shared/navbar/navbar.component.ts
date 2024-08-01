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

  constructor(private LayoutComponent: LayoutComponent) {}

  ngOnInit() {
    this.LayoutComponent.mostrar$.subscribe(valor => {
      this.mostrar = valor;
    });
  }
  
}
