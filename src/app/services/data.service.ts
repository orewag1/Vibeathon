// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { Attendee, Session, AttendeeCategory } from '../models/data.model';

@Injectable({ providedIn: 'root' })
export class DataService {

  // Mock sessions for the AI to recommend
  private mockSessions: Session[] = [
    { id: 'S001', title: 'Generative AI in SAP BTP', speaker: 'Alice J.', track: 'A', timeslot: '10:00 - 11:00', location: 'Hall 1', keywords: ['AI', 'BTP', 'Developer', 'Innovation'] },
    { id: 'S002', title: 'S/4HANA Cloud Migration', speaker: 'Bob S.', track: 'B', timeslot: '10:00 - 11:00', location: 'Hall 2', keywords: ['S/4HANA', 'Cloud', 'ERP', 'Professional'] },
    { id: 'S003', title: 'Low-Code/No-Code for Students', speaker: 'Charlie B.', track: 'C', timeslot: '11:30 - 12:30', location: 'Hall 3', keywords: ['LCNC', 'Student', 'Beginner', 'Developer'] },
    { id: 'S004', title: 'Advanced Fiori Development', speaker: 'Dana S.', track: 'A', timeslot: '11:30 - 12:30', location: 'Hall 1', keywords: ['Fiori', 'Developer', 'Technical'] },
    { id: 'S005', title: 'Digital Marketing & CRM', speaker: 'Eddie V.', track: 'B', timeslot: '14:00 - 15:00', location: 'Hall 2', keywords: ['CRM', 'Business', 'Marketing', 'Professional'] },
    { id: 'S006', title: 'The Future of Quantum', speaker: 'Fiona A.', track: 'C', timeslot: '14:00 - 15:00', location: 'Hall 3', keywords: ['Innovation', 'Student', 'Advanced'] },
  ];
  
  // Mock other attendees for networking
  private mockOtherAttendees: Attendee[] = [
    { id: 'VTH-002', fullName: 'Sarah Connor', emailAddress: '', mobileNumber: '', foodChoice: 'Veg', attendeeCategory: 'Professional', company: 'Tech Corp', designation: 'AI Specialist', personalAgenda: [], checkedIn: true },
    { id: 'VTH-003', fullName: 'Raj Patel', emailAddress: '', mobileNumber: '', foodChoice: 'Non-Veg', attendeeCategory: 'Professional', company: 'Global ERP', designation: 'Finance Manager', personalAgenda: [], checkedIn: true },
    { id: 'VTH-004', fullName: 'Anya Sharma', emailAddress: '', mobileNumber: '', foodChoice: 'Veg', attendeeCategory: 'Student', college: 'MIT', ugPg: 'UG', yearOfStudy: '3', personalAgenda: [], checkedIn: true },
  ];

  // The current attendee profile
  private mockAttendee: Attendee = {
    id: 'VTH-000', fullName: 'Default User', emailAddress: 'default@example.com', mobileNumber: '', foodChoice: 'Veg', attendeeCategory: 'Professional', designation: 'Cloud Developer', personalAgenda: [], checkedIn: false
  };

  getSessions(): Session[] { return this.mockSessions; }
  getAttendee(): Attendee { return this.mockAttendee; }
  getOtherAttendees(): Attendee[] { return this.mockOtherAttendees; }

  // CRITICAL: Updates the attendee profile after successful registration
  updateAttendeeProfile(formData: any, category: AttendeeCategory): void {
    this.mockAttendee = {
      ...this.mockAttendee,
      ...formData,
      attendeeCategory: category,
      id: `VTH-${Math.floor(Math.random() * 9000) + 1000}`,
      personalAgenda: [],
      checkedIn: false
    };
  }

  togglePersonalAgenda(sessionId: string): void {
    const index = this.mockAttendee.personalAgenda.indexOf(sessionId);
    if (index > -1) {
      this.mockAttendee.personalAgenda.splice(index, 1);
    } else {
      this.mockAttendee.personalAgenda.push(sessionId);
    }
  }
}