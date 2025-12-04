import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDash } from './top-dash';

describe('TopDash', () => {
  let component: TopDash;
  let fixture: ComponentFixture<TopDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
