import { TestBed } from '@angular/core/testing';

import { BaseService } from './Services/base.service';

describe('BackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseService<object> = TestBed.get(BaseService);
    expect(service).toBeTruthy();
  });
});
