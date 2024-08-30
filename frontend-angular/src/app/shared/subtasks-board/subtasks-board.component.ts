import { Component } from '@angular/core';
import { LayoutComponent } from '../../pages/layout/layout.component';

@Component({
  selector: 'app-subtasks-board',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './subtasks-board.component.html',
  styleUrl: './subtasks-board.component.css'
})
export class SubtasksBoardComponent {

  constructor(private LayoutComponent:LayoutComponent) {}

  setMostrar(value: number) {
    this.LayoutComponent.setMostrar(value);
  }

  setMirando(value: number) {
    this.LayoutComponent.setMirando(value);
  }

}
