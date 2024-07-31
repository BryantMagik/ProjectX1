import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TicketComponent } from '../../shared/ticket/ticket.component';
import { ProfilesComponent } from '../../shared/profiles/profiles.component';
import { ProjectsComponent } from '../../shared/projects/projects.component';
import { TasksComponent } from '../../shared/tasks/tasks.component';
import { SubtasksComponent } from '../../shared/subtasks/subtasks.component';
import { IssuesComponent } from '../../shared/issues/issues.component';
import { CommentsComponent } from '../../shared/comments/comments.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, TicketComponent,ProfilesComponent,ProjectsComponent,TasksComponent,SubtasksComponent,IssuesComponent,CommentsComponent,NgIf],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private mostrarSubject = new BehaviorSubject<number>(0);
  mostrar$ = this.mostrarSubject.asObservable();
  mostrar!: number;

  constructor() {}

  ngOnInit() {
    this.mostrar$.subscribe(value => {
      this.mostrar = value;
    });
  }

  setMostrar(value: number) {
    this.mostrarSubject.next(value);
  }
}
