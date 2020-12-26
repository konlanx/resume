import { Component, OnInit } from '@angular/core';
import {faUser, faBuilding, faCodeBranch, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faUser = faUser;
  faBuilding = faBuilding;
  faCodeBranch = faCodeBranch;
  faGraduationCap = faGraduationCap;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(site: string): void {
    this.router.navigateByUrl(site);
  }
}
