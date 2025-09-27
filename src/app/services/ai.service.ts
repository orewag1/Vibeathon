// src/app/services/ai.service.ts

import { Injectable } from '@angular/core';
import { Attendee, Session } from '../models/data.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(private dataService: DataService) { }

  // 1. Helper: Extract Keywords from the Attendee Profile
  private getProfileKeywords(attendee: Attendee): string[] {
    let keywords: string[] = [];
    const profileText = attendee.attendeeCategory === 'Professional' 
      ? attendee.designation?.toLowerCase() || '' 
      : `${attendee.college?.toLowerCase() || ''} ${attendee.ugPg?.toLowerCase() || ''}`;

    // Simple keyword mapping based on common event topics
    if (profileText.includes('cloud') || profileText.includes('developer')) {
      keywords.push('Developer', 'Cloud', 'Technical');
    }
    if (profileText.includes('manager') || profileText.includes('business') || profileText.includes('finance')) {
      keywords.push('Professional', 'Business', 'ERP');
    }
    if (profileText.includes('student') || profileText.includes('ug') || profileText.includes('pg')) {
      keywords.push('Student', 'Beginner');
    }
    if (profileText.includes('ai') || profileText.includes('innovation')) {
      keywords.push('AI', 'Innovation');
    }
    
    // Return unique keywords
    return [...new Set(keywords)];
  }

  // 2. Helper: Calculate how well a session matches the attendee
  private calculateMatchScore(session: Session, profileKeywords: string[]): number {
    let score = 0;
    for (const sessionKeyword of session.keywords) {
      if (profileKeywords.includes(sessionKeyword)) {
        score += 1; // 1 point for every matching keyword
      }
    }
    return score;
  }

  // 3. AI-Powered Agenda: Generates Personalized, Conflict-Free Sessions
  generateRecommendedAgenda(attendee: Attendee): Session[] {
    const allSessions = this.dataService.getSessions();
    const profileKeywords = this.getProfileKeywords(attendee); 
    
    const scoredSessions = allSessions.map(session => ({
      session,
      score: this.calculateMatchScore(session, profileKeywords)
    }));

    // Sort by score (highest match first)
    scoredSessions.sort((a, b) => b.score - a.score);

    // Build Agenda ensuring NO CONFLICTS (Constraint Solver)
    const recommendedAgenda: Session[] = [];
    const usedTimeslots: string[] = [];

    for (const { session, score } of scoredSessions) {
      // Only recommend sessions with a positive score (i.e., relevant)
      if (score > 0) { 
        // Check for time conflict (no session in the same timeslot)
        if (!usedTimeslots.includes(session.timeslot)) {
          recommendedAgenda.push(session);
          usedTimeslots.push(session.timeslot);
        }
      }
    }

    return recommendedAgenda;
  }
  
  // 4. Smart Networking: Generates Connections Matches
  getNetworkingMatches(currentUser: Attendee): Attendee[] {
    // We assume getOtherAttendees() from DataService is implemented
    const allOthers = this.dataService.getOtherAttendees(); 
    const currentUserKeywords = this.getProfileKeywords(currentUser);
    
    const matches = allOthers.map(other => {
      const otherUserKeywords = this.getProfileKeywords(other);
      let matchScore = 0;
      
      // Calculate score based on shared interests/roles
      currentUserKeywords.forEach(kw => {
        if (otherUserKeywords.includes(kw)) {
          matchScore += 1; // Score point for shared keyword
        }
      });

      // Bonus for matching category (Pro vs. Student)
      if (currentUser.attendeeCategory === other.attendeeCategory) {
        matchScore += 2; 
      }

      return { user: other, score: matchScore };
    });

    // CRITICAL FIX: Properly filter and sort the matches array before slicing
    return matches
      .filter(m => m.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(m => m.user);
  }
}