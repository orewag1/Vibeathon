// src/app/services/chatbot.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChatbotService {

  // Mock knowledge base for the LLM chatbot
  public knowledgeBase = {
    'session': "I recommend checking the 'Agenda' tab. We have sessions on AI, S/4HANA, and Low-Code development.",
    'venue': "The Vibeathon is located in Hall A of the Convention Center. Look for the check-in desk near the main entrance.",
    'speaker': "We have 15 speakers, including Alice Johnson (AI) and Bob Smith (S/4HANA). Check the full agenda for bios!",
    'food': "Lunch service starts at 1:00 PM. Please proceed to Hall 4 for collection (based on your Veg/Non-Veg choice).",
    'default': "Hello! I am your SIT Concierge Chatbot. Ask me about 'sessions', 'venue', or 'speakers'!",
  };

  // Note: For simplicity, we are skipping the HttpClient integration here, 
  // but in the final app, this service would make the secure POST request to the Node.js backend.
  constructor() { } 

  // Simulates calling an LLM API
  getBotResponse(query: string): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => { // Simulate network delay
        const normalizedQuery = query.toLowerCase();
        let response = this.knowledgeBase.default;

        if (normalizedQuery.includes('session') || normalizedQuery.includes('talk') || normalizedQuery.includes('agenda')) {
          response = this.knowledgeBase.session;
        } else if (normalizedQuery.includes('venue') || normalizedQuery.includes('location')) {
          response = this.knowledgeBase.venue;
        } else if (normalizedQuery.includes('speaker') || normalizedQuery.includes('presenter')) {
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