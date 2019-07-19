import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private heroSvc : HeroService ) { }

  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes : Hero[];

  selectedHero: Hero;
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroSvc.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  
  
  
  
  

}