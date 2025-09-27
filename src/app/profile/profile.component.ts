// src/app/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Attendee } from '../models/data.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  attendee!: Attendee;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.attendee = this.dataService.getAttendee();
  }

  // Mock function for event staff to simulate check-in
  mockCheckIn(): void {
    if (!this.attendee.checkedIn) {
      this.attendee.checkedIn = true;
      alert('SUCCESS: Check-in simulated! Database status updated.');
    } else {
       alert('Attendee already checked in.');
    }
  }
}