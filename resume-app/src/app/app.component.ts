import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slideVerticalAnimation} from "./animations/animations";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideVerticalAnimation]
})
export class AppComponent {

  languages = ['en', 'de'];

  constructor(translate: TranslateService, title: Title) {
    translate.setDefaultLang('en');
    translate.addLangs(this.languages);
    translate.use(this.languages.indexOf(translate.getBrowserLang()) != -1 ? translate.getBrowserLang() : 'en');

    translate.get('title').subscribe(result => {
      title.setTitle(result);
    });
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
