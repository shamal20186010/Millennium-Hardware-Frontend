import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagCustomerComponent } from './manag-customer.component';

describe('ManagCustomerComponent', () => {
  let component: ManagCustomerComponent;
  let fixture: ComponentFixture<ManagCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
