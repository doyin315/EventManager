import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {EventService} from '../shared/event.service';
@Injectable({
  providedIn: 'root'
})
export class EventRouteActivator implements CanActivate {

  constructor(private router: Router, private eventService: EventService) { }

  canActivate(route: ActivatedRouteSnapshot){
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExists)  {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}

