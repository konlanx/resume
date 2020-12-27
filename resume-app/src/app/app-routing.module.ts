import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortraitButtonComponent} from "./portrait-button/portrait-button.component";
import {AnimationFrameComponent} from "./animation-frame/animation-frame.component";
import {PersonComponent} from "./person/person.component";
import {CompaniesComponent} from "./companies/companies.component";
import {SkillsComponent} from "./skills/skills.component";
import {EducationComponent} from "./education/education.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/portrait'},
  { path: 'portrait', component: PortraitButtonComponent, data: {animation: 'Counterfeit'} },
  { path: 'overview', component: AnimationFrameComponent, data: {animation: 'AnimationFrame'},
    children: [
      { path: '', component: PersonComponent, data: {animation: 'Person'} },
      { path: 'person', component: PersonComponent, data: {animation: 'Person'} },
      { path: 'companies', component: CompaniesComponent, data: {animation: 'Companies'} },
      { path: 'skills', component: SkillsComponent, data: {animation: 'Skills'} },
      { path: 'education', component: EducationComponent, data: {animation: 'Education'} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
