import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        query('.project-card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🛒',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
      image: '📋',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['Angular', 'TypeScript', 'Weather API', 'Chart.js'],
      image: '🌤️',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media metrics and generating insights.',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
      image: '📊',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness tracking application with workout plans and progress monitoring.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '💪',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, comments, and SEO optimization.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Prisma'],
      image: '✍️',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    }
  ];
}

