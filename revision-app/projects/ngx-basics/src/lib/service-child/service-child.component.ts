import { Component, OnInit } from '@angular/core';

import { SingletonService } from '../services/singleton.service';

@Component({
  selector: 'lib-service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.css'],
})
export class ServiceChildComponent implements OnInit {
  constructor(private singletonService: SingletonService) {}

  ngOnInit(): void {}
}
