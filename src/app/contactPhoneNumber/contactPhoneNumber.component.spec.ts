import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPhoneNumberComponent } from './contactPhoneNumber.component';

describe('ContactPhoneNumberComponent', () => {
  let component: ContactPhoneNumberComponent;
  let fixture: ComponentFixture<ContactPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPhoneNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
