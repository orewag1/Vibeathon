import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NetworkingComponent } from './networking/networking.component';
import { ProfileComponent } from './profile/profile.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfessionalRegistrationComponent } from './professional-registration/professional-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    AgendaComponent,
    ChatbotComponent,
    NetworkingComponent,
    ProfileComponent,
    LandingComponent,
    DashboardComponent,
    ProfessionalRegistrationComponent,
    StudentRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
