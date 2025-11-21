import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitMessage = 'Thank you for your message! I\'ll get back to you soon.';
        this.contactForm.reset();
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }, 1500);
    }
  }

  get contactInfo() {
    return [
      { icon: '📧', label: 'Email', value: 'foram.upadhyay@example.com', link: 'mailto:foram.upadhyay@example.com' },
      { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
      { icon: '📍', label: 'Location', value: 'Available Worldwide', link: null },
      { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/foram-upadhyay', link: 'https://linkedin.com' }
    ];
  }
}

