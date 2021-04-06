import { TestBed } from '@angular/core/testing';

import { SafeUrl.PipeService } from './safe-url.pipe.service';

describe('SafeUrl.PipeService', () => {
  let service: SafeUrl.PipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafeUrl.PipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
