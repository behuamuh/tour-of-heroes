import { Component, OnInit } from '@angular/core';

import { Hero } from '../types';
import { HEROES } from '../mocks';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero) {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
