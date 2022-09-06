import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUiComponentsComponent } from './ngx-ui-components.component';

describe('NgxUiComponentsComponent', () => {
  let component: NgxUiComponentsComponent;
  let fixture: ComponentFixture<NgxUiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUiComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
