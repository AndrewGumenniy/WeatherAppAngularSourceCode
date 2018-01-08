import { TestBed, inject } from '@angular/core/testing';

import { ForecastItemService } from './forecast-item.service';

describe('ForecastItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForecastItemService]
    });
  });

  it('should be created', inject([ForecastItemService], (service: ForecastItemService) => {
    expect(service).toBeTruthy();
  }));
});
