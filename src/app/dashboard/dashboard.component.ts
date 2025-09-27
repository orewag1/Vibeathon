// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Attendee } from '../models/data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  attendee!: Attendee;
  nextSessionTitle: string = 'Check AI Agenda!';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.attendee = this.dataService.getAttendee();
    // In a real app, you would dynamically find the next session here.
  }

  // Mock function for event staff to simulate QR code check-in
  mockCheckIn(): void {
    if (!this.attendee.checkedIn) {
      this.attendee.checkedIn = true;
      alert('SUCCESS: Check-in simulated! Database status updated for smooth entry.');
    } else {
       alert('Attendee already checked in.');
    }
  }
}