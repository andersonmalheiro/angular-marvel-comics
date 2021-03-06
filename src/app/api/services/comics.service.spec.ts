/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComicsService } from './comics.service';

describe('Service: Comics', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicsService]
    });
  });

  it('should ...', inject([ComicsService], (service: ComicsService) => {
    expect(service).toBeTruthy();
  }));
});
