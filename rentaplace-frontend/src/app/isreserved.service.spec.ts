import { TestBed } from '@angular/core/testing';

import { IsreservedService } from './isreserved.service';

describe('IsreservedService', () => {
  let service: IsreservedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsreservedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
