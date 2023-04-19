import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  create(event: Event): Observable<Event>{
    return this.httpClient.post<Event>('http://localhost:3000/api/events',event);
  }
}
