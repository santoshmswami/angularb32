import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEMployeeForm } from './new-employee-form';

describe('NewEMployeeForm', () => {
  let component: NewEMployeeForm;
  let fixture: ComponentFixture<NewEMployeeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEMployeeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEMployeeForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
