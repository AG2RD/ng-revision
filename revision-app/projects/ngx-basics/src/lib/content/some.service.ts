import { Injectable, OnDestroy, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SomeService implements OnDestroy, OnInit {
  counter = 0;
  constructor() {
    console.log('SomeService instantiated');
  }
  ngOnDestroy(): void {
    console.log('destroy SomeService instance');
  }

  ngOnInit() {
    console.log('on inti');
  }
  talkToMe(): void {
    console.log("ok i'm talking to you");
    // setTimeout(() => {
    //   this.counter++;
    //   console.log(`someService tick ${this.counter}`);
    // }, 500);
  }
}
