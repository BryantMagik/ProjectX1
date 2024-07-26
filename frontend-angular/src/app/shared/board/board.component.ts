import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from '../ticket/ticket.component';
import { CommentsComponent } from '../comments/comments.component';
import { IssuesComponent } from '../issues/issues.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SubtasksComponent } from '../subtasks/subtasks.component';
import { TasksComponent } from '../tasks/tasks.component';
import { ProfilesComponent } from '../profiles/profiles.component';
import { IssuesdetailsComponent } from '../../subpages/issuesdetails/issuesdetails.component';
import { ProjectsDetailsComponent } from '../../subpages/projects-details/projects-details.component';
import { CommentsDetailsComponent } from '../../subpages/comments-details/comments-details.component';
import { TasksDetailsComponent } from '../../subpages/tasks-details/tasks-details.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, TicketComponent,CommentsComponent,IssuesComponent,ProjectsComponent,SubtasksComponent,TasksComponent,ProfilesComponent,IssuesdetailsComponent,ProjectsDetailsComponent,CommentsDetailsComponent,TasksDetailsComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
