import { Component, Directive, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';

import { SomeService } from './some.service';

@Directive({ selector: 'pane' })
export class Pane {
  @Input() id!: string;
}
@Directive({ selector: 'myTargetDirective' })
export class MyTargetDirective {
  @Input() id!: string;
}
@Component({
  selector: 'lib-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  selectedPane: string = '';
  shouldShow = true;

  @ViewChild('divTemplateRef')
  myTestDiv!: ElementRef<HTMLDivElement>;

  @ViewChild(Pane)
  set pane(v: Pane) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }

  @ViewChildren(MyTargetDirective)
  myDirectives!: QueryList<MyTargetDirective>;

  @ViewChild(SomeService) someServiceRef!: SomeService;

  @ViewChild(TemplateRef, { read: ElementRef }) myTemplate!: ElementRef;
  /**
   *
   */

  ngAfterViewInit(): void {
    const divEl = this.myTestDiv.nativeElement;
    divEl.innerHTML =
      '<i>this content is injected from the ts part of component into the template</i>';
    this.myDirectives.forEach((elem) => console.log(elem.id));
    this.someServiceRef.talkToMe();
    console.log(this.myTemplate.nativeElement);
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
