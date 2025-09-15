import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects';
import { Project } from '../_models/Project';
import { NgbModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Trevor Lubking - Home');
  }

  ngOnInit() {
    this.featuredProject = this.projectsService.getProjectById(1);
  }
}
