import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAdv } from './reactive-adv';

describe('ReactiveAdv', () => {
  let component: ReactiveAdv;
  let fixture: ComponentFixture<ReactiveAdv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveAdv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveAdv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
