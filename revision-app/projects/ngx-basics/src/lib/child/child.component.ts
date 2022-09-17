import { Component } from '@angular/core';

import { SomeService } from '../content/some.service';

@Component({
  selector: 'lib-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [SomeService],
})
export class ChildComponent {
  constructor() {}
}
