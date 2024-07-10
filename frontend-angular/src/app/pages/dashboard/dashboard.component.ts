import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from '../../shared/board/board.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BoardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
