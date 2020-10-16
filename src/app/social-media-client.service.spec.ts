import { TestBed } from '@angular/core/testing';

import { SocialMediaClientService } from './social-media-client.service';

describe('SocialMediaClientService', () => {
  let service: SocialMediaClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialMediaClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
