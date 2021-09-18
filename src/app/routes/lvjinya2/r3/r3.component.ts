import { Component, OnInit } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './r3.component.html',
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}