import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <app-nav></app-nav>
  <router-outlet></router-outlet>
 `,

})
export class EventsAppComponent {
  title = 'fundamentals';
}
