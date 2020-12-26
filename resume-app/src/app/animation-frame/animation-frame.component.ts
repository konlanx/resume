import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slideHorizontalAnimation} from "../animations/animations";

@Component({
  selector: 'app-animation-frame',
  templateUrl: './animation-frame.component.html',
  styleUrls: ['./animation-frame.component.css'],
  animations: [
    slideHorizontalAnimation
  ]
})
export class AnimationFrameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
