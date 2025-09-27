// src/app/agenda/agenda.component.ts
import { Component, OnInit } from '@angular/core';
import { Session, Attendee } from '../models/data.model';
import { DataService } from '../services/data.service';
import { AiService } from '../services/ai.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  allSessions: Session[] = [];
  recommendedSessions: Session[] = [];
  currentAttendee!: Attendee;
  // Default to AI-Recommended to showcase the feature immediately
  activeTab: 'all' | 'personal' | 'ai-recommended' = 'ai-recommended'; 

  constructor(
    private dataService: DataService,
    private aiService: AiService
  ) {}

  ngOnInit(): void {
    this.currentAttendee = this.dataService.getAttendee();
    this.allSessions = this.dataService.getSessions();
    // Immediately call AI logic on load for the default tab
    this.generateAiAgenda(); 
  }

  // Function to run the AI logic
  generateAiAgenda(): void {
    this.recommendedSessions = this.aiService.generateRecommendedAgenda(this.currentAttendee);
    this.activeTab = 'ai-recommended';
  }

  // Function to toggle session in personal agenda
  toggleSession(sessionId: string): void {
    this.dataService.togglePersonalAgenda(sessionId);
  }

  // Check if a session is in the attendee's personal agenda
  isInPersonalAgenda(sessionId: string): boolean {
    return this.currentAttendee.personalAgenda.includes(sessionId);
  }
}