import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Filter {
  id: string | string;
  title: string;
  active?: boolean;
}

export interface ActiveFilter {
  id?: number | string;
  group: string;
}

@Component({
  selector: 'lib-vcfilters',
  templateUrl: './vcfilters.component.html',
  styleUrls: ['./vcfilters.component.css'],
})
export class VcfiltersComponent implements OnInit {
  @Input() group!: string;
  @Input() filters: Filter[] = [];
  changeFilter!: BehaviorSubject<ActiveFilter>;
  ngOnInit() {
    const initialFilter = this.filters.find((f) => f.active);

    this.changeFilter = new BehaviorSubject<ActiveFilter>({
      group: this.group,
      id: initialFilter?.id,
    });
  }

  ngOnDestroy() {
    this.changeFilter.unsubscribe();
  }
}
