import { Component, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrls: ['./resume.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resume {
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Trevor Lubking - Resume');
  }

  downloadResume(): void {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/Trevor_Lubking_Resume.pdf');
    link.setAttribute('download', 'Trevor_Lubking_Resume.pdf');
    link.click();
    link.remove();
  }
}
