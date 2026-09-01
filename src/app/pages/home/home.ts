import { Component } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  imports: [ProjectCard],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
