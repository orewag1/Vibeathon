// src/app/landing/landing.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private router: Router) { }

  // Function to initiate registration
  startRegistration(): void {
    this.router.navigate(['/register']);
  }
}