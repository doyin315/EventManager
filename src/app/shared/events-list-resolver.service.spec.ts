import { TestBed } from '@angular/core/testing';

import { EventsListResolverService } from './events-list-resolver.service';

describe('EventsListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsListResolverService = TestBed.get(EventsListResolverService);
    expect(service).toBeTruthy();
  });
});
