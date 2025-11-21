import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        query('.about-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class AboutComponent {
  aboutPoints = [
    {
      icon: '💡',
      title: 'Innovative Thinker',
      description: 'Always exploring new technologies and creative solutions to complex problems.'
    },
    {
      icon: '🎯',
      title: 'Goal-Oriented',
      description: 'Focused on delivering high-quality results that exceed expectations.'
    },
    {
      icon: '🤝',
      title: 'Team Player',
      description: 'Collaborative approach with excellent communication and leadership skills.'
    },
    {
      icon: '🚀',
      title: 'Continuous Learner',
      description: 'Passionate about staying updated with the latest industry trends and best practices.'
    }
  ];
}

