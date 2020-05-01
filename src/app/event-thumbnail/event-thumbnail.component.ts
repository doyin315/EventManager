import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {IEvent} from '../index';
@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:IEvent;
  someProperty: any = "some value"

  logfoo(){
    console.log("fooooooo")
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
        return {color: 'green', 'font-weight': 'bold' }
      }
    return {}
  }

 
  constructor() { }

  ngOnInit() {
  }

}
