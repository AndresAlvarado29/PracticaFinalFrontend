import { TestBed } from '@angular/core/testing';

import { ServiciosWebService } from './servicios-web.service';

describe('ServiciosWebService', () => {
  let service: ServiciosWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
