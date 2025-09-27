// src/app/chatbot/chatbot.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';

interface ChatMessage { text: string; sender: 'user' | 'bot'; }

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages: ChatMessage[] = [];
  userInput: string = '';
  isTyping: boolean = false;

  constructor(private chatbotService: ChatbotService) { } 

  ngOnInit(): void {
    this.messages.push({ text: this.chatbotService.knowledgeBase.default, sender: 'bot' });
  }

  async sendMessage(): Promise<void> {
    const userQuery = this.userInput.trim();
    if (userQuery === '') return;

    this.messages.push({ text: userQuery, sender: 'user' });
    this.userInput = '';
    this.isTyping = true; 

    const botResponse = await this.chatbotService.getBotResponse(userQuery);

    this.isTyping = false;
    this.messages.push({ text: botResponse, sender: 'bot' });
  }
}