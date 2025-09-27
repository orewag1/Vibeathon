// src/app/networking/networking.component.ts
import { Component, OnInit } from '@angular/core';
import { AiService } from '../services/ai.service';
import { DataService } from '../services/data.service';
import { Attendee } from '../models/data.model';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.css']
})
export class NetworkingComponent implements OnInit {
  suggestedConnections: Attendee[] = [];
  currentUser!: Attendee;

  constructor(private aiService: AiService, private dataService: DataService) { }

  ngOnInit(): void {
    this.currentUser = this.dataService.getAttendee();
    // CRITICAL: Call the AI service to get matches
    this.suggestedConnections = this.aiService.getNetworkingMatches(this.currentUser);
  }
}