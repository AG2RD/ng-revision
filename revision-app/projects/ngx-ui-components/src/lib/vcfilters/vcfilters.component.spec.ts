import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcfiltersComponent } from './vcfilters.component';

describe('VcfiltersComponent', () => {
  let component: VcfiltersComponent;
  let fixture: ComponentFixture<VcfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcfiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
