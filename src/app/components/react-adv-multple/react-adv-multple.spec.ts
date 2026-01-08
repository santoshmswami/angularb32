import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactAdvMultple } from './react-adv-multple';

describe('ReactAdvMultple', () => {
  let component: ReactAdvMultple;
  let fixture: ComponentFixture<ReactAdvMultple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactAdvMultple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactAdvMultple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
