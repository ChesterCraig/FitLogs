import { TestBed } from '@angular/core/testing';

import { AlertifyjsService } from './alertifyjs.service';

describe('AlertifyjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertifyjsService = TestBed.get(AlertifyjsService);
    expect(service).toBeTruthy();
  });
});
