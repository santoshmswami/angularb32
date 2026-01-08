import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signaladv } from './signaladv';

describe('Signaladv', () => {
  let component: Signaladv;
  let fixture: ComponentFixture<Signaladv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signaladv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signaladv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
