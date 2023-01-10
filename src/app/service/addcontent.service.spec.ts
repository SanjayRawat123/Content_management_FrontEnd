import { TestBed } from '@angular/core/testing';

import { AddcontentService } from './addcontent.service';

describe('AddcontentService', () => {
  let service: AddcontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
