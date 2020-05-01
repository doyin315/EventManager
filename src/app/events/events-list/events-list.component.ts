import { Component, OnInit } from '@angular/core';
import {EventService}  from '../../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {IEvent} from '../../index';
@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: IEvent[]
    handleEventClicked(data){
      console.log('received: ', data)
    }
  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }
  ngOnInit() {
   this.events = this.route.snapshot.data['events'];
    console.log(this.events);
  }
  
}
