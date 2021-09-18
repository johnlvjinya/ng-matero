import { Component, OnInit } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-heroes',
  templateUrl: './r9_1.component.html',
})
export class HeroesComponent9_1 implements OnInit {
  hero: Hero = {
    id: 10,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}