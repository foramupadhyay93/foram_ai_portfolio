import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        query('.skill-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(50, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class SkillsComponent {
  skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', level: 90, color: '#dd0031' },
        { name: 'TypeScript', level: 85, color: '#3178c6' },
        { name: 'JavaScript', level: 90, color: '#f7df1e' },
        { name: 'HTML/CSS', level: 95, color: '#e34c26' },
        { name: 'React', level: 80, color: '#61dafb' },
        { name: 'SCSS/SASS', level: 85, color: '#cc6699' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Express', level: 80, color: '#000000' },
        { name: 'Python', level: 75, color: '#3776ab' },
        { name: 'PostgreSQL', level: 80, color: '#336791' },
        { name: 'MongoDB', level: 75, color: '#47a248' },
        { name: 'REST APIs', level: 90, color: '#ff6b6b' }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: '#f05032' },
        { name: 'Docker', level: 70, color: '#2496ed' },
        { name: 'AWS', level: 75, color: '#ff9900' },
        { name: 'CI/CD', level: 80, color: '#2088ff' },
        { name: 'Agile/Scrum', level: 85, color: '#009639' },
        { name: 'Figma', level: 75, color: '#f24e1e' }
      ]
    }
  ];
}

