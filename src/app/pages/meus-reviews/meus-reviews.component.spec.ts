import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusReviewsComponent } from './meus-reviews.component';

describe('MeusReviewsComponent', () => {
  let component: MeusReviewsComponent;
  let fixture: ComponentFixture<MeusReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
