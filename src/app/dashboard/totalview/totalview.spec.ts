import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Totalview } from './totalview';

describe('Totalview', () => {
  let component: Totalview;
  let fixture: ComponentFixture<Totalview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Totalview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Totalview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
