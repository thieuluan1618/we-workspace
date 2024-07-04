import { TestBed } from '@angular/core/testing';

import { NgtlCommonService } from './ngtl-common.service';

describe('NgtlCommonService', () => {
  let service: NgtlCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgtlCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
