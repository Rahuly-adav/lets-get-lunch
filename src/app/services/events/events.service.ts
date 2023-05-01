import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';
import { format } from 'date-fns';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  create(event: Event): Observable<Event> {
    return this.httpClient.post<Event>('http://localhost:3000/api/events', event);
  }

  getUserEvents(userId: string): Observable<Event[]> {
    return this.httpClient.get<Event[]>('http://localhost:3000/api/events/user/' + userId);
  }

  get(eventId: string): Observable<Event> {
    return this.httpClient.get<Event>('http://localhost:3000/api/events/' + eventId).pipe(
      map((res: Event) => this.formatDateTime(res))
    );
  }

  formatDateTime(event: Event): Event {
    event.displayStart = format(new Date(event.startTime), 'EEE MMM, do - h:mm a');
    event.displayEnd = format(new Date (event.endTime), 'EEE MMM, do - h:mm a');
    return event;
  }

  all(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('http://localhost:3000/api/events');
  }

  isEventCreator(creatorId: string): boolean{
    const user = this.authService.currentUser();
    return user._id == creatorId ? true : false;
  }

  subscribe(eventId: string, user: object): Observable<Event>{
    return this.httpClient.patch<Event>('http://localhost:3000/api/events/' + eventId + '/subscribe', user);
  }
}
