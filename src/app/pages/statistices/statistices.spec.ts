import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statistices } from './statistices';

describe('Statistices', () => {
  let component: Statistices;
  let fixture: ComponentFixture<Statistices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statistices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statistices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
