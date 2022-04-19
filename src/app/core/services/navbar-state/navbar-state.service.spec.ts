/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { NavbarStateService } from './navbar-state.service';

describe('Service: NavbarState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarStateService],
    });
  });

  it('should ...', inject(
    [NavbarStateService],
    (service: NavbarStateService) => {
      expect(service).toBeTruthy();
    }
  ));
});
