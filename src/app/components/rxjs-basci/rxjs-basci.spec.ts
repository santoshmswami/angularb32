import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasci } from './rxjs-basci';

describe('RxjsBasci', () => {
  let component: RxjsBasci;
  let fixture: ComponentFixture<RxjsBasci>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsBasci]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsBasci);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
