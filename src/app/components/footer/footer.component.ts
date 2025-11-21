import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '🔗' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🔗' },
    { name: 'Email', url: 'mailto:foram.upadhyay@example.com', icon: '📧' }
  ];
}

