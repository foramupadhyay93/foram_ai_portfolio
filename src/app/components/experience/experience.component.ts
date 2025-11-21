import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        query('.experience-item', [
          style({ opacity: 0, transform: 'translateX(-30px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Leading development of scalable web applications using Angular and Node.js. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on multiple projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Built 20+ responsive web applications',
        'Improved code quality and reduced bugs by 30%',
        'Participated in agile development processes'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupHub',
      period: '2019 - 2020',
      location: 'San Francisco, CA',
      description: 'Started my professional journey working on frontend development and learning backend technologies. Contributed to various startup projects.',
      achievements: [
        'Developed responsive UI components',
        'Learned modern JavaScript frameworks',
        'Contributed to open-source projects'
      ]
    }
  ];
}

