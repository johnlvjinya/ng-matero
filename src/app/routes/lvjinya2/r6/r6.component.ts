import { Component, OnInit } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-heroes',
  templateUrl: './r6.component.html',
})
export class HeroesComponent6 implements OnInit {
  hero: Hero = {
    id: 6,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}