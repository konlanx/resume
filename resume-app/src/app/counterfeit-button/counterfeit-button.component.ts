import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-counterfeit-button',
  templateUrl: './counterfeit-button.component.html',
  styleUrls: ['./counterfeit-button.component.css']
})
export class CounterfeitButtonComponent implements OnInit {

  private buttonFactor = 0.4;

  buttonMouse = false;
  size: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.size = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.size = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
  }

  getButtonSize(): number {
    return this.size * this.buttonFactor;
  }

  getButtonMargin(): number {
    return (this.getButtonSize() / 2) * (-1);
  }

  getBackgroundWidth(): number {
    return window.innerWidth;
  }

  getBackgroundHeight(): number {
    return window.innerHeight;
  }

  buttonMouseEnter(): void {
    this.buttonMouse = true;
  }

  buttonMouseLeave(): void {
    this.buttonMouse = false;
  }

  routeToAnimationComponent(): void {
    this.router.navigateByUrl('/animation-frame');
  }
}
