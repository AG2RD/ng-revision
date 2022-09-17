import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBasicsComponent } from './ngx-basics.component';

describe('NgxBasicsComponent', () => {
  let component: NgxBasicsComponent;
  let fixture: ComponentFixture<NgxBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
