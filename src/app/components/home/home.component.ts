import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.6s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('nameAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8) translateY(-20px)' }),
        animate('0.8s 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', 
          style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        )
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  typedText = '';
  fullText = 'Full Stack Developer';
  currentIndex = 0;
  isDeleting = false;
  showContent = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.showContent = true;
    this.typeText();
  }

  typeText() {
    if (!this.isDeleting && this.currentIndex < this.fullText.length) {
      this.typedText = this.fullText.substring(0, this.currentIndex + 1);
      this.currentIndex++;
      setTimeout(() => this.typeText(), 100);
    } else if (this.isDeleting && this.currentIndex > 0) {
      this.typedText = this.fullText.substring(0, this.currentIndex - 1);
      this.currentIndex--;
      setTimeout(() => this.typeText(), 50);
    } else {
      this.isDeleting = !this.isDeleting;
      setTimeout(() => this.typeText(), 1000);
    }
  }

  scrollToSection(section: string) {
    this.router.navigate([`/${section}`]).then(() => {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }
}
