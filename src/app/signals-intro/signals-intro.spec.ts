import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsIntro } from './signals-intro';

describe('SignalsIntro', () => {
  let component: SignalsIntro;
  let fixture: ComponentFixture<SignalsIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsIntro],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
