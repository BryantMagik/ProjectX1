import { Component, OnInit,ViewChild } from '@angular/core';
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
import { ProjectsDetailsComponent } from '../../subpages/projects-details/projects-details.component';
import { TasksDetailsComponent } from '../../subpages/tasks-details/tasks-details.component';
import { SubtasksDetailsComponent } from '../../subpages/subtasks-details/subtasks-details.component';
import { IssuesdetailsComponent } from '../../subpages/issuesdetails/issuesdetails.component';
import { CommentsDetailsComponent } from '../../subpages/comments-details/comments-details.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, TicketComponent,ProfilesComponent,ProjectsComponent,TasksComponent,SubtasksComponent,IssuesComponent,CommentsComponent,NgIf,ProjectsDetailsComponent,TasksDetailsComponent,SubtasksDetailsComponent,IssuesdetailsComponent,CommentsDetailsComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private mostrarSubject = new BehaviorSubject<number>(0);
  mostrar$ = this.mostrarSubject.asObservable();
  mostrar!: number;

  private mirandoSubject = new BehaviorSubject<number>(0);
  mirando$ = this.mirandoSubject.asObservable();
  mirando!: number;


  @ViewChild(NavbarComponent) navbarComponent!: NavbarComponent;

  constructor() {}

  ngOnInit() {
    this.mostrar$.subscribe(value => {
      this.mostrar = value;
    });

    this.mirando$.subscribe(value => {
      this.mirando = value;
    });
  }

  setMostrar(value: number) {
    this.mostrarSubject.next(value);
  }

  setMirando(value: number) {
    this.mirandoSubject.next(value);
  }
  

  getMostrar(): number {
    return this.mostrar;
  }
}
