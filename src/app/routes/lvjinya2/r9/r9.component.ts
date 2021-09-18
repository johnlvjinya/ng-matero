import { Component, OnInit } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-heroes',
  templateUrl: './r9.component.html',
})
export class HeroesComponent9 implements OnInit {
  hero: Hero = {
    id: 9,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}