import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './types';
import { HEROES } from './mocks';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
