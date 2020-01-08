import { TestBed } from '@angular/core/testing';

import { RolepermissionService } from './Services/rolepermission.service';

describe('RolepermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolepermissionService = TestBed.get(RolepermissionService);
    expect(service).toBeTruthy();
  });
});
