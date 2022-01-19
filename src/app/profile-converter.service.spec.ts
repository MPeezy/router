import { TestBed } from '@angular/core/testing';

import { ProfileConverterService } from './profile-converter.service';

describe('ProfileConverterService', () => {
  let service: ProfileConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
