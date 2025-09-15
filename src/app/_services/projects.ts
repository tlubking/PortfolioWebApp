import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      name: 'EnchantedQuill',
      summary: 'A magical writing app that brings your stories to life.',
      description:
        "An AI powered Children's Book application that helps users craft compelling stories with ease. Features include multiple supported art types, enhanced system prompts for better context awareness and more. This application is served via a .NET Web API backend that interfaces with OpenAI's API to provide advanced AI capabilities.",
      projectLink: 'https://enchanted-quill-app.vercel.app',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.TAILWIND_CSS, Tag.C_SHARP, Tag.DOT_NET],
      pictures: ['/assets/eq1.png', '/assets/eq2.png', '/assets/eq3.png'],
    },
    {
      id: 2,
      name: 'Trinity',
      summary: 'A convenient tool for viewing scripture.',
      description:
        'A scripture application that allows users to easily select and read passages from the Bible in a user-friendly interface. The application data is served via a .NET Web API backend in tandem with API.Bible, ensuring efficient and reliable access to scripture content.',
      projectLink: 'https://trinity-web-app-ten.vercel.app',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.C_SHARP, Tag.DOT_NET],
      pictures: ['/assets/trin1.png', '/assets/trin2.png', '/assets/trin3.png'],
    },
    {
      id: 3,
      name: 'Portfolio Website',
      summary: 'A showcase of my work and projects.',
      description:
        'A personal portfolio website built to showcase my projects, skills, and experience (the very site you are viewing now). The site is designed with a clean and modern aesthetic, utilizing Angular for the frontend development. It features responsive design principles to ensure optimal viewing across various devices and screen sizes.',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP],
      pictures: [
        '/assets/placeholder1.png',
        '/assets/placeholder2.png',
        '/assets/placeholder3.png',
      ],
    },
  ];

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number): Project {
    let project = this.projects.find((p) => p.id === id);
    if (!project) {
      throw new Error('Project not found');
    }
    return project;
  }
}
