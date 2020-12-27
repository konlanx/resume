import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  @Input() name: string = '';
  @Input() subtitle: string = '';
  @Input() since: string = '';
  @Input() to: string = '';
  @Input() image: string = '';
  @Input() description: string = '';

  sinceDate: Date = new Date();
  toDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    if(this.since && this.since !== '') {
      this.sinceDate = new Date(Date.parse(this.since + 'T00:00:00.000Z'));
    }

    if(this.to && this.to !== '') {
      this.toDate = new Date(Date.parse(this.to + 'T00:00:00.000Z'));
    }
  }

}
