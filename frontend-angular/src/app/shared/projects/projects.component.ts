import { Component, OnInit, NgModule} from '@angular/core';
import { CommonModule, NgFor, NgClass } from '@angular/common';


export interface Project {
  id: number;
  name: string;
  description: string;
  codeKey: string;
  type: string;
  status: string;
  creationDate: string;
  updateDate: string;
  createdBy: string;
  participants: string[];
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor,CommonModule,NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})



export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      name: 'Project Alpha',
      description: 'This is a description for Project Alpha.',
      codeKey: 'ALP123',
      type: 'software',
      status: 'Active',
      creationDate: '2023-07-01',
      updateDate: '2024-07-01',
      createdBy: 'John Doe',
      participants: ['Jane Smith', 'Bob Johnson']
    },
    // Añade más proyectos aquí
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
