import { TestBed } from '@angular/core/testing';

import { ValidadroSesionGuard } from './validadro-sesion.guard';

describe('ValidadroSesionGuard', () => {
  let guard: ValidadroSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidadroSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
