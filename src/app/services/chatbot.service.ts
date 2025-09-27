// src/app/services/chatbot.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChatbotService {

  // CRITICAL: The mock knowledge base for the LLM
  public knowledgeBase = {
    'session': "I recommend checking the 'Agenda' tab. We have sessions on AI, S/4HANA, and Low-Code development.",
    'venue': "The Vibeathon is located in Hall A of the Convention Center. Look for the check-in desk near the main entrance.",
    'speaker': "We have 15 speakers, including Alice Johnson (AI) and Bob Smith (S/4HANA). Check the full agenda for bios!",
    'food': "Lunch service starts at 1:00 PM. Please proceed to Hall 4 for collection.",
    'default': "Hello! I am your SIT Concierge Chatbot. Ask me about 'sessions', 'venue', or 'speakers'!",
  };

  constructor() { }

  // Simulates calling an LLM API (The AI response logic)
  getBotResponse(query: string): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => { // Simulate network delay
        const normalizedQuery = query.toLowerCase();
        let response = this.knowledgeBase.default;

        if (normalizedQuery.includes('session') || normalizedQuery.includes('talk')) {
          response = this.knowledgeBase.session;
        } else if (normalizedQuery.includes('venue') || normalizedQuery.includes('location')) {
          response = this.knowledgeBase.venue;
        } else if (normalizedQuery.includes('speaker')) {
          response = this.knowledgeBase.speaker;
        } else if (normalizedQuery.includes('food') || normalizedQuery.includes('lunch')) {
          response = this.knowledgeBase.food;
        } else {
          response = `I'm sorry, I cannot find information on "${query}". Please ask about key event topics.`;
        }
        resolve(response);
      }, 500); 
    });
  }
}