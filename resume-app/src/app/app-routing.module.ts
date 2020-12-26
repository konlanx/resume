import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterfeitButtonComponent} from "./counterfeit-button/counterfeit-button.component";
import {AnimationFrameComponent} from "./animation-frame/animation-frame.component";
import {PersonComponent} from "./person/person.component";
import {CompaniesComponent} from "./companies/companies.component";
import {SkillsComponent} from "./skills/skills.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/counterfeit'},
  { path: 'counterfeit', component: CounterfeitButtonComponent, data: {animation: 'Counterfeit'} },
  { path: 'overview', component: AnimationFrameComponent, data: {animation: 'AnimationFrame'},
    children: [
      { path: '', component: PersonComponent, data: {animation: 'Person'} },
      { path: 'person', component: PersonComponent, data: {animation: 'Person'} },
      { path: 'companies', component: CompaniesComponent, data: {animation: 'Companies'} },
      { path: 'skills', component: SkillsComponent, data: {animation: 'Skills'} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
