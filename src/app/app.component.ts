import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CalendarOptions} from '@fullcalendar/core';
import {FullCalendarComponent, FullCalendarModule} from '@fullcalendar/angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import {LocalStorageService} from '../services/local-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbModule, FullCalendarModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

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
    slotLabelInterval: "00:30:00",
    eventShortHeight: 1,
    plugins: [dayGridPlugin, timeGridPlugin, bootstrap5Plugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'startTimer',
      right: 'dayGridMonth,timeGridWeek,timeGridDay' // user can switch between the two
    },
    weekends: false,
    nowIndicator: true,
    businessHours: {
      daysOfWeek: [1, 2, 3, 4, 5],
      startTime: '09:00',
      endTime: '18:00',
    },
    height: '100vh',
    // slotMinTime: '06:00:00',
    // slotMaxTime: '22:00:00',
    locale: 'fr-FR',
    events: LocalStorageService.loadEvents(),
    eventsSet: (events) => LocalStorageService.saveEvents(events),
    customButtons: {
      startTimer: {
        text: 'démarrer un timer',
        click: () => {
          const start = new Date()
          this.calendarComponent.getApi().addEvent(
            {
              id: 'timer',
              title: 'truc',
              start: start.toISOString(),
              end: new Date().toISOString()
            }
          )

          setInterval(() => {
            this.calendarComponent.getApi().getEventById('timer')?.setEnd(new Date().toISOString())
            this.calendarComponent.getApi().setOption('customButtons', {startTimer: {text: ((new Date().getUTCSeconds() - start.getUTCSeconds())).toString() }})
            console.log(this.calendarComponent.getApi().getEventById('timer'))
          }, 1000)
        }
      }
    },

    editable: true,
    eventStartEditable: true,
    eventDurationEditable: true,

    selectable: true,
    selectMirror: true,
    selectMinDistance: 1,
    select: (info) => {
      console.log(info)
    }
  };
}
