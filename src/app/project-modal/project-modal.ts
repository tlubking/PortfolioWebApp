import { Component } from '@angular/core';
import { NgbModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-modal',
  imports: [NgbCarouselModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css',
})
export class ProjectModal {
  project = {} as Project;

  constructor(public modal: NgbModal) {}
}
