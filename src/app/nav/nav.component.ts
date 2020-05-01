import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/auth.service';
import {FormsModule} from '@angular/forms';
import {EventService} from '../index';
import {ISession} from '../shared/event.model';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchTerm = '';
  foundSessions: any;

  constructor(public auth: AuthService,
              private eventService: EventService) { }

  searchSessions(searchTerm: string) {
  this.eventService.searchSessions(searchTerm)
  .subscribe(sessions => {
    this.foundSessions = sessions;
  });
  }
  ngOnInit() {
  }
}
