import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsService } from './services/events.service';
import { MembersService } from '../members/services/members.service'

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
    declarations: [
        EventsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        EventsRoutingModule,
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
          })
    ],
    providers: [
        EventsService,
        MembersService
    ]
})

export class EventsModule {}