import { Component} from '@angular/core';
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
import { SubtasksDetailsComponent } from '../../subpages/subtasks-details/subtasks-details.component';
import { TasksBoardComponent } from '../tasks-board/tasks-board.component';
import { SubtasksBoardComponent } from '../subtasks-board/subtasks-board.component';
import { IssuesBoardComponent } from '../issues-board/issues-board.component';
import { CommentsBoardComponent } from '../comments-board/comments-board.component';
import { LayoutComponent } from '../../pages/layout/layout.component';
import { ProjectsBoardComponent } from '../projects-board/projects-board.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, TicketComponent,CommentsComponent,IssuesComponent,ProjectsComponent,SubtasksComponent,TasksComponent,ProfilesComponent,IssuesdetailsComponent,ProjectsDetailsComponent,CommentsDetailsComponent,TasksDetailsComponent,SubtasksDetailsComponent,TasksBoardComponent,SubtasksBoardComponent,IssuesBoardComponent,CommentsBoardComponent,ProjectsBoardComponent,LayoutComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  constructor(private LayoutComponent:LayoutComponent) {}

  setMostrar(value: number) {
    this.LayoutComponent.setMostrar(value);
  }

  setMirando(value: number) {
    this.LayoutComponent.setMirando(value);
  }

}
