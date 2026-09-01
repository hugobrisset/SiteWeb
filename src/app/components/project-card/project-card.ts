import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-project-card',
  styleUrl: './project-card.scss',
  templateUrl: './project-card.html',
})
export class ProjectCard {
  title = input.required<string>();
  category = input.required<string>();
  description = input.required<string>();
  image = input.required<string>();
}
