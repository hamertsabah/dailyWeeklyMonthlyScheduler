import { Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'daily-weekly-monthly-scheduler';
  events: Event[] = [];
      onNewEvent(event: Event) {
        this.events = this.events.concat(event);
      }
      
}
