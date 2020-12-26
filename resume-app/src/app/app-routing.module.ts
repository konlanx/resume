import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterfeitButtonComponent} from "./counterfeit-button/counterfeit-button.component";
import {AnimationFrameComponent} from "./animation-frame/animation-frame.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/counterfeit'},
  { path: 'counterfeit', component: CounterfeitButtonComponent, data: {animation: 'Counterfeit'}},
  { path: 'animation-frame', component: AnimationFrameComponent, data: {animation: 'AnimationFrame'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
