import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatingFormComponent } from './templating-form.component';

describe('TemplatingFormComponent', () => {
  let component: TemplatingFormComponent;
  let fixture: ComponentFixture<TemplatingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
