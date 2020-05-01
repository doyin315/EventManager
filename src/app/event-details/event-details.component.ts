import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Params} from '@angular/router';
import {IEvent} from '../index';
import { ISession } from '../shared/event.model';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode: boolean;
  filterBy: string= 'all';
  sortBy: string = 'votes';
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) =>{
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    })
    // this.event = this.eventService.getEvent(
    //   +this.route.snapshot.params['id']);
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map( s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode = false;
  }
  addSession() {
    this.addMode = true;
  }
}
