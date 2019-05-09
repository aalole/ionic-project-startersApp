import { TestBed } from '@angular/core/testing';

import { GreetingServiceService } from './greeting-service.service';

describe('GreetingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GreetingServiceService = TestBed.get(GreetingServiceService);
    expect(service).toBeTruthy();
  });
});
