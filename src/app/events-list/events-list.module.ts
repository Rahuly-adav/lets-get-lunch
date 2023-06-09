import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsListRoutingModule } from './events-list-routing.module';
import { EventsListComponent } from './events-list.component';


@NgModule({
  declarations: [
    EventsListComponent
  ],
  imports: [
    CommonModule,
    EventsListRoutingModule
  ]
})
export class EventsListModule { }
