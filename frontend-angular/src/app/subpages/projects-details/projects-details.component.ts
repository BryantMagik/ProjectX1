import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../shared/projects/projects.component';

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [],
  templateUrl: './projects-details.component.html',
  styleUrl: './projects-details.component.css'
})
export class ProjectsDetailsComponent implements OnInit {
  project: Project | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Aquí deberías obtener los datos del proyecto por ID
    // Por simplicidad, usando datos mock
    this.project = {
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
    };
  }

}
