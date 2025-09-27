// src/app/models/data.model.ts
export type AttendeeCategory = 'Professional' | 'Student';

export interface Attendee {
  id: string; 
  fullName: string;
  emailAddress: string;
  mobileNumber: string;
  foodChoice: 'Veg' | 'Non-Veg';
  attendeeCategory: AttendeeCategory;
  company?: string;
  designation?: string; // AI Key
  college?: string;
  ugPg?: 'UG' | 'PG'; // AI Key
  yearOfStudy?: string; // AI Key
  personalAgenda: string[];
  checkedIn: boolean; 
}

export interface Session {
  id: string;
  title: string;
  speaker: string;
  track: 'A' | 'B' | 'C';
  timeslot: string; // e.g., '10:00 - 11:00'
  location: string;
  keywords: string[]; // CRITICAL: Used for AI recommendation
}