import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventRouteActivator} from './event-details/event-route-activator.service';
import {RoughComponent} from './rough/rough.component';
import  {ProfileComponent} from './user/profile.component';
import { EventDetailsComponent, EventsListComponent, CreateEventComponent, Error404Component,
  EventsListResolverService, CreateSessionComponent} from './index';
const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: '404', component: Error404Component},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'rough',  component: RoughComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
