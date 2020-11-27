import { TestBed } from '@angular/core/testing';

import { ScrumFormService } from './scrum-form.service';

describe('ScrumFormService', () => {
  let service: ScrumFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrumFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
