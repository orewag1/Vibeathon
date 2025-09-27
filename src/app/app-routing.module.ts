// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NetworkingComponent } from './networking/networking.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'networking', component: NetworkingComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }