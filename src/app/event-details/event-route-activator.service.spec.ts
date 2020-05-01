import { TestBed } from '@angular/core/testing';

import { EventRouteActivatorService } from './event-route-activator.service';

describe('EventRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventRouteActivatorService = TestBed.get(EventRouteActivatorService);
    expect(service).toBeTruthy();
  });
});
