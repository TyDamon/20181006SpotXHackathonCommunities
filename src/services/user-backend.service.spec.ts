import { TestBed } from '@angular/core/testing';

import { UserBackendService } from './user-backend.service';

describe('UserBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBackendService = TestBed.get(UserBackendService);
    expect(service).toBeTruthy();
  });
});
