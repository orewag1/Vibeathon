// src/app/header/header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public router: Router) {} 

  navItems = [
    { name: 'Register', route: '/register' },
    { name: 'Agenda (AI)', route: '/agenda' },
    { name: 'Networking (AI)', route: '/networking' },
    { name: 'Chatbot (AI)', route: '/chatbot' },
    { name: 'My Profile/QR', route: '/profile' }
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}