import {Component, HostListener, OnInit} from '@angular/core';
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

  innerHeight = 0;

  constructor() { }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.innerHeight = window.innerHeight;
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
