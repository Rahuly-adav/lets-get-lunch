import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime-ex';

import { EventRoutingModule } from './event-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventViewComponent } from './event-view/event-view.component';
import { CommentCreateModule } from '../comment-create/comment-create.module';
import { MemberListModule } from '../member-list/member-list.module';
import { RecommendationsListModule } from '../recommendations-list/recommendations-list.module';
import { EventUpdateComponent } from './event-update/event-update.component';

@NgModule({
  declarations: [EventCreateComponent, EventViewComponent, EventUpdateComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CommentCreateModule,
    MemberListModule,
    RecommendationsListModule
  ]
})
export class EventModule { }
