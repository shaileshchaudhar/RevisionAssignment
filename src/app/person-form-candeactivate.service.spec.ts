import { TestBed } from '@angular/core/testing';

import { PersonFormCandeactivateService } from './person-form-candeactivate.service';

describe('PersonFormCandeactivateService', () => {
  let service: PersonFormCandeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonFormCandeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
