import { TestBed } from '@angular/core/testing';

import { EDataServiceService } from './edata-service.service';

describe('EDataServiceService', () => {
  let service: EDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
