import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYouTubeChannelInputComponent } from './add-you-tube-channel-input.component';

describe('AddYouTubeChannelInputComponent', () => {
  let component: AddYouTubeChannelInputComponent;
  let fixture: ComponentFixture<AddYouTubeChannelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddYouTubeChannelInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYouTubeChannelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
