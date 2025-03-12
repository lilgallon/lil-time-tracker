import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalendarOptions} from '@fullcalendar/core';
import {FullCalendarModule} from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbModule, FullCalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lil-time-tracker';
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    themeSystem: 'bootstrap5',
    buttonIcons: {
      prev: 'chevron-left',
      next: 'chevron-right',
      prevYear: 'chevrons-left', // double chevron
      nextYear: 'chevrons-right' // double chevron
    },
    plugins: [timeGridPlugin, bootstrap5Plugin],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay' // user can switch between the two
    }
  };
}
