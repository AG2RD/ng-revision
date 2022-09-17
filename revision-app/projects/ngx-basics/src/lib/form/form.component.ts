import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  submitted = false;
  favoriteColor = '';
  heroPowers = ['light', 'dark', 'telekinesis', 'smart'];
  model = {
    favoriteColor: 'blue',
    name: 'Jean',
    heroPower: 'light',
  };

  ngOnInit() {}
  onSubmit() {
    this.submitted = true;
  }
}
