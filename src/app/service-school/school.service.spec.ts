import { TestBed, inject } from '@angular/core/testing';

import { SchoolServiceService } from './SchoolService';

describe('SchoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolServiceService]
    });
  });

  it('should ...', inject([SchoolServiceService], (service: SchoolServiceService) => {
    expect(service).toBeTruthy();
  }));
});
