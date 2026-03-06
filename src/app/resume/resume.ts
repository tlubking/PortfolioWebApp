import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrls: ['./resume.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resume {
  private readonly titleService = inject(Title);

  private readonly resumePdfUrl =
    'https://docs.google.com/document/d/1ooLPJci0KbhPYFtFti7Sj-4rRDHEyDP_2z8LMYHhwRA/export?format=pdf';

  constructor() {
    this.titleService.setTitle('Trevor Lubking - Resume');
  }

  downloadResume(): void {
    window.open(this.resumePdfUrl, '_blank', 'noopener,noreferrer');
  }
}
