// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NetworkingComponent } from './networking/networking.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component'; // <-- NEW IMPORT
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfessionalRegistrationComponent } from './professional-registration/professional-registration.component'; // NEW
import { StudentRegistrationComponent } from './student-registration/student-registration.component'; // NEW


const routes: Routes = [
  // Changed: Base path now goes to the landing page
  { path: '', component: LandingComponent }, 
   { path: 'dashboard', component: DashboardComponent },
  // Existing paths remain the same
  { path: 'register', component: RegistrationComponent },
  { path: 'register/professional', component: ProfessionalRegistrationComponent },
  { path: 'register/student', component: StudentRegistrationComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'networking', component: NetworkingComponent },
  { path: 'profile', component: ProfileComponent },
  
  // Optional: Add a redirect for unrecognized paths (good practice)
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }