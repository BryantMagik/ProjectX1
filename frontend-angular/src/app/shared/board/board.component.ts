import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, TicketComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
