import { TestBed } from '@angular/core/testing';

import { AuthInterceptorServiceService } from './auth-interceptor-service.service';

describe('AuthInterceptorServiceService', () => {
  let service: AuthInterceptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
