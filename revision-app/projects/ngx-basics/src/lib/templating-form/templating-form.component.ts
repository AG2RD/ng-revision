import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-templating-form',
  templateUrl: './templating-form.component.html',
  styleUrls: ['./templating-form.component.css'],
})
export class TemplatingFormComponent implements OnInit {
  superPowers = ['flying', 'destruction', 'mentalist', 'intelligence'];

  submitted = false;
  formModel = {
    lastName: '',
    firstName: '',
    birthdate: new Date(14, 3, 1988),
    superPower: this.superPowers[0],
  };
  constructor() {}

  onSubmit() {
    this.submitted = true;
  }
  ngOnInit(): void {}
}
