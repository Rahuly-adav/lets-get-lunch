import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietPreferencesService {
  dietPreferences = [
    { name: 'BBQ', checked: false },
    { name: 'Burger', checked: false },
    { name: 'Chinese', checked: false },
    { name: 'Deli', checked: false },
    { name: 'Fast Food', checked: false },
    { name: 'Italian', checked: false },
    { name: 'Japanese', checked: false },
    { name: 'Mexican', checked: false },
    { name: 'Pizza', checked: false }
  ];

  getDietaryPreferences() {
    return this.dietPreferences;
  }

  constructor() { }
}
