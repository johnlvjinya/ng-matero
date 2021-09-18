import { Component, OnInit } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-heroes',
  templateUrl: './r8.component.html',
})
export class HeroesComponent8 implements OnInit {
  hero: Hero = {
    id: 8,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}