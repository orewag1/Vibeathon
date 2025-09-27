// src/app/student-registration/student-registration.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  attendeeCategory = 'Student'; 

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      // REQUIRED FIELDS 
      fullName: ['', Validators.required], // [cite: 36]
      emailAddress: ['', [Validators.required, Validators.email]], // [cite: 37]
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // [cite: 38]
      college: ['', Validators.required], // [cite: 40]
      ugPg: ['', Validators.required], // [cite: 41] (AI Key)
      yearOfStudy: ['', Validators.required], // [cite: 42] (AI Key)
      foodChoice: ['', Validators.required], // [cite: 43]

      // OPTIONAL/LOGISTICS FIELDS 
      country: [''], // [cite: 44]
      gender: [''], // [cite: 45]
      bloodGroup: [''], // [cite: 46]
      emergencyContactName: [''], // [cite: 47]
      emergencyContactNumber: ['', Validators.pattern('^[0-9]*$')], // [cite: 48]
      optInConsent: [false], // [cite: 49]
      
      // SYSTEM FIELD 
      attendeeCategory: [this.attendeeCategory] // [cite: 39]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.dataService.updateAttendeeProfile(this.registrationForm.value, 'Student');
      alert('Registration successful! Profile saved for AI personalization.');
      this.router.navigate(['/dashboard']); 
    } else {
      alert('Please correct the validation errors and fill out all required fields.');
      this.registrationForm.markAllAsTouched();
    }
  }

  // Helper for conditional error display in HTML
  isInvalid(controlName: string): boolean {
    const control = this.registrationForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}