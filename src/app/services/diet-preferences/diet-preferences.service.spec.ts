import { TestBed } from '@angular/core/testing';

import { DietPreferencesService } from './diet-preferences.service';

const dietPreferences = [
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

describe('DietPreferencesService', () => {
  let service: DietPreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietPreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('.getDietaryPreferences() should return an array of dietary preferences', () => {
    expect(service.getDietaryPreferences()).toEqual(dietPreferences);
  });
});
