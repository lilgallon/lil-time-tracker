import {Component, ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalendarOptions} from '@fullcalendar/core';
import {FullCalendarModule} from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbModule, FullCalendarModule],
  encapsulation: ViewEncapsulation.None,
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
      prevYear: 'chevrons-left',
      nextYear: 'chevrons-right'
    },
    slotDuration: '00:01:00',
    slotLabelInterval: "00:10:00",
    eventShortHeight: 1,
    plugins: [timeGridPlugin, bootstrap5Plugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay' // user can switch between the two
    },
    weekends: false,
    nowIndicator: true,
    businessHours: {
      daysOfWeek: [ 1, 2, 3, 4, 5 ],
      startTime: '09:00',
      endTime: '18:00',
    },
    // slotMinTime: '06:00:00',
    // slotMaxTime: '22:00:00',
    locale: 'fr-FR'
  };
  events = [
    {
      id: 'a',
      title: 'my event',
      start: '2025-03-12T10:30:00',
      end: '2025-03-12T11:30:00',
      editable: true,
      startEditable: true,
      durationEditable: true
    }
  ];
}
