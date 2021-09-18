import { Component, OnInit } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-heroes',
  templateUrl: './r4.component.html',
})
export class HeroesComponent4 implements OnInit {
  hero: Hero = {
    id: 4,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}