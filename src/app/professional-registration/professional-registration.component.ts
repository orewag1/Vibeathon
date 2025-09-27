// src/app/professional-registration/professional-registration.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-professional-registration',
  templateUrl: './professional-registration.component.html',
  styleUrls: ['./professional-registration.component.css']
})
export class ProfessionalRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  attendeeCategory = 'Professional'; 

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      // REQUIRED FIELDS 
      fullName: ['', Validators.required], // [cite: 21]
      emailAddress: ['', [Validators.required, Validators.email]], // [cite: 22]
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // [cite: 23]
      company: ['', Validators.required], // [cite: 25]
      designation: ['', Validators.required], // [cite: 26] (AI Key)
      foodChoice: ['', Validators.required], // [cite: 27]

      // OPTIONAL/LOGISTICS FIELDS 
      country: [''], // [cite: 28]
      gender: [''], // [cite: 29]
      bloodGroup: [''], // [cite: 30]
      emergencyContactName: [''], // [cite: 31]
      emergencyContactNumber: ['', Validators.pattern('^[0-9]*$')], // [cite: 32]
      optInConsent: [false], // [cite: 33]
      
      // SYSTEM FIELD 
      attendeeCategory: [this.attendeeCategory] // [cite: 24]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.dataService.updateAttendeeProfile(this.registrationForm.value, 'Professional');
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