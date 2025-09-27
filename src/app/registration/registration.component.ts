// src/app/registration/registration.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AttendeeCategory } from '../models/data.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  attendeeCategory: AttendeeCategory = 'Professional'; 

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit(): void { this.initForm(); }

  initForm(): void {
    const commonFields = {
      fullName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      foodChoice: ['', Validators.required],
      optInConsent: [false],
    };

    if (this.attendeeCategory === 'Professional') {
      this.registrationForm = this.fb.group({
        ...commonFields,
        company: ['', Validators.required],
        designation: ['', Validators.required], // CRITICAL: AI Key
        attendeeCategory: ['Professional']
      });
    } else { // Student
      this.registrationForm = this.fb.group({
        ...commonFields,
        college: ['', Validators.required],
        ugPg: ['', Validators.required], // CRITICAL: AI Key
        yearOfStudy: ['', Validators.required], // CRITICAL: AI Key
        attendeeCategory: ['Student']
      });
    }
  }

  switchCategory(category: AttendeeCategory): void {
    this.attendeeCategory = category;
    this.initForm();
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      
      // CRITICAL: Save the data for the AI engine
      this.dataService.updateAttendeeProfile(this.registrationForm.value, this.attendeeCategory);
      
      alert('Registration successful! Profile saved for AI personalization.');
      
      // Redirect to agenda to demonstrate the AI immediately
      this.router.navigate(['/agenda']); 
      
    } else {
      alert('Please fill out all required fields.');
      this.registrationForm.markAllAsTouched();
    }
  }
}