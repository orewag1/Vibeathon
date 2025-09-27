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
  personalSessions: Session[] = []; // Array for My Path view
  activeTab: 'all' | 'personal' | 'ai-recommended' = 'ai-recommended'; 

  constructor(
    private dataService: DataService,
    private aiService: AiService
  ) {}

  ngOnInit(): void {
    this.currentAttendee = this.dataService.getAttendee();
    this.allSessions = this.dataService.getSessions();
    
    // Initial data calls
    this.generateAiAgenda(); 
    this.updatePersonalSessions(); // Populate the My Path sessions
  }

  generateAiAgenda(): void {
    // Generate AI recommendations immediately
    this.recommendedSessions = this.aiService.generateRecommendedAgenda(this.currentAttendee);
  }

  // CRITICAL: Toggles session, updates attendee reference, AND updates the filtered list.
  toggleSession(sessionId: string): void {
    this.dataService.togglePersonalAgenda(sessionId);
    
    // Re-get attendee object
    this.currentAttendee = this.dataService.getAttendee(); 
    
    // Update the filtered lists to force re-render
    this.updatePersonalSessions(); 
    this.generateAiAgenda(); 
  }

  // Function to filter the full session list down to only selected ones (for My Path tab)
  updatePersonalSessions(): void {
    this.personalSessions = this.allSessions.filter(session => 
      this.currentAttendee.personalAgenda.includes(session.id)
    );
  }

  // Helper for checking if a session is selected
  isInPersonalAgenda(sessionId: string): boolean {
    return this.currentAttendee.personalAgenda.includes(sessionId);
  }
}