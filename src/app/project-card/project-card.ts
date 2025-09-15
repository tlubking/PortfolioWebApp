import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { Project } from '../_models/Project';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModal } from '../project-modal/project-modal';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  private modalService = inject(NgbModal);
  closeResult: WritableSignal<string> = signal('');
  @Input() project = {} as Project;

  openProjectModal() {
    const modalRef = this.modalService.open(ProjectModal, { size: 'lg' });
    // Pass the project data to the modal component instance
    if (modalRef && modalRef.componentInstance) {
      (modalRef.componentInstance as ProjectModal).project = this.project;
    }
  }
}
