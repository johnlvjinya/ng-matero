import { Component, OnInit } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-heroes',
  templateUrl: './r7.component.html',
})
export class HeroesComponent7 implements OnInit {
  hero: Hero = {
    id: 7,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}