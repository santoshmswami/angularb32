import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpotFound } from './npot-found';

describe('NpotFound', () => {
  let component: NpotFound;
  let fixture: ComponentFixture<NpotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpotFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
