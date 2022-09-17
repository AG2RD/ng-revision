import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { combineLatestWith, map, switchMap } from 'rxjs/operators';

import { ActiveFilter, VcfiltersComponent } from '../vcfilters/vcfilters.component';

export interface Filter {
  id: string | string;
  title: string;
  active?: boolean;
}

@Component({
  selector: 'lib-vccfilters',
  templateUrl: './vccfilters.component.html',
  styleUrls: ['./vccfilters.component.css'],
})
export class VccfiltersComponent implements OnInit, AfterViewInit {
  resourceType: Filter[] = [
    {
      id: 'all',
      title: 'All',
      active: true,
    },
    {
      id: 'article',
      title: 'Article',
    },
    {
      id: 'video',
      title: 'Video',
    },
    {
      id: 'course',
      title: 'Course',
    },
  ];

  levels: Filter[] = [
    {
      id: 'beginner',
      title: 'Beginner',
      active: true,
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
    },
    {
      id: 'advanced',
      title: 'Advanced',
    },
  ];

  @ViewChildren(VcfiltersComponent) filters!: QueryList<VcfiltersComponent>;
  ressources: any;
  constructor() {}
  ngAfterViewInit(): void {
    const filters = this.filters.map((f) => f.changeFilter);
    this.ressources = combineLatestWith([...filters]).pipe(
      map((filters: ActiveFilter[]) =>
        filters.map((filter) => `${filter.group}=${filter.id}`).join('&')
      ),
      switchMap(this.getData)
    );
  }

  ngOnInit(): void {}
}
