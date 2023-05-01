import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime-ex';

import { EventRoutingModule } from './event-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventViewComponent } from './event-view/event-view.component';
import { CommentCreateModule } from '../comment-create/comment-create.module';
import { MemberListModule } from '../member-list/member-list.module';

@NgModule({
  declarations: [EventCreateComponent, EventViewComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CommentCreateModule,
    MemberListModule
  ]
})
export class EventModule { }
