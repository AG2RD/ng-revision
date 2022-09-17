import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInstantiationComponent } from './service-instantiation.component';

describe('ServiceInstantiationComponent', () => {
  let component: ServiceInstantiationComponent;
  let fixture: ComponentFixture<ServiceInstantiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInstantiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceInstantiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
