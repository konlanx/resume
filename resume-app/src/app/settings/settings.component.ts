import { Component, OnInit } from '@angular/core';
import {faCog, faInfo} from "@fortawesome/free-solid-svg-icons";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  faCog = faCog;
  faInfo = faInfo;

  showSettingsOverlay = false;
  showInformationOverlay = false;

  constructor(private translate: TranslateService, private title: Title) { }

  ngOnInit(): void {
  }

  toggleSettingsOverlay(): void {
    this.showSettingsOverlay = !this.showSettingsOverlay;
    if (this.showSettingsOverlay) {
      this.showInformationOverlay = false;
    }
  }

  toggleInformationOverlay(): void {
    this.showInformationOverlay = !this.showInformationOverlay;
    if (this.showInformationOverlay) {
      this.showSettingsOverlay = false;
    }
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.translate.get('title').subscribe(result => {
      this.title.setTitle(result);
    });
  }

  getSelectedLang(): string {
    return this.translate.currentLang;
  }
}
