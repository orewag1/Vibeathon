// src/app/registration/registration.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // This component is now just the selection menu
  constructor(private router: Router) { }

  selectCategory(category: 'professional' | 'student'): void {
    // Navigate to the dedicated registration component
    this.router.navigate([`/register/${category}`]);
  }
}