import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VccfiltersComponent } from './vccfilters.component';

describe('VccfiltersComponent', () => {
  let component: VccfiltersComponent;
  let fixture: ComponentFixture<VccfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VccfiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VccfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
