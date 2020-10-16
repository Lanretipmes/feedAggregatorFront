import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaPostCardComponent } from './social-media-post-card.component';

describe('SocialMediaPostCardComponent', () => {
  let component: SocialMediaPostCardComponent;
  let fixture: ComponentFixture<SocialMediaPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaPostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
