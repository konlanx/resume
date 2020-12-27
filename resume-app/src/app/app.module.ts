import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationFrameComponent } from './animation-frame/animation-frame.component';
import { PortraitButtonComponent } from './portrait-button/portrait-button.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SettingsComponent } from './settings/settings.component';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { PersonComponent } from './person/person.component';
import { CompaniesComponent } from './companies/companies.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skill/skill.component';
import { MatProgressBarModule} from "@angular/material/progress-bar";
import { OrganizationComponent } from './organization/organization.component';
import { EducationComponent } from './education/education.component';
import {LocalizedDatePipe} from "./pipes/localized-date-pipe";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AnimationFrameComponent,
    PortraitButtonComponent,
    SettingsComponent,
    MenuComponent,
    PersonComponent,
    CompaniesComponent,
    SkillsComponent,
    SkillComponent,
    OrganizationComponent,
    EducationComponent,
    LocalizedDatePipe,
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
