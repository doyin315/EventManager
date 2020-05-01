import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EventRouteActivator} from './event-details/event-route-activator.service';
import {RouterModule} from '@angular/router';
import { EventDetailsComponent, EventsListComponent, CreateEventComponent, Error404Component,
   EventsListResolverService, EventService, NavComponent, EventThumbnailComponent,CreateSessionComponent, UpvoteComponent} from './index';
import { AuthService } from './user/auth.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RoughComponent } from './rough/rough.component';
import { SessionListComponent } from './event-details/session-list.component';
import {ToastrModule} from 'ngx-toastr';
import {SimpleModalComponent, ModalTriggerDirective, CollapsibleWellComponent} from './common/index';
import {VoterService} from './event-details/voter.service';

// let jQuery = window['$'];
// import {TOASTR_TOKEN, Toastr} from './common/toastr.service';

// declare let toastr: Toastr;
@NgModule({
  declarations: [
    UpvoteComponent,
    CollapsibleWellComponent,
    ModalTriggerDirective,
    SessionListComponent,
    Error404Component,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    RoughComponent,
    CreateSessionComponent,
    SimpleModalComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    VoterService,
    EventService,
     EventRouteActivator,
    //  {provide: TOASTR_TOKEN, useValue: toastr},
     EventsListResolverService,
     AuthService,
    //  {provide: JQ_TOKEN, useValue: jQuery},
    {
      provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  }
],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}
