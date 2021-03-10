/* tslint:disable:no-unused-variable */

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { ComicsService } from './comics.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('Service: Comics', () => {
  let service: ComicsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicsService],
      imports: [HttpClientModule, HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = new ComicsService(httpClient);
  });

  it('should create the service', inject(
    [ComicsService],
    (service: ComicsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
