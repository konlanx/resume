import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() name: string = '';
  @Input() subtitle: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() skill: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
