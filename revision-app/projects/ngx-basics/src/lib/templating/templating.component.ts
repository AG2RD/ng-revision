import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-templating',
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.css'],
})
export class TemplatingComponent implements OnInit {
  mySimpleInterpolation: string;

  constructor() {
    this.mySimpleInterpolation = 'test';
  }

  logMe(event: Event) {
    console.log(`action detected ${event.type}`);
  }
  ngOnInit(): void {}
}
