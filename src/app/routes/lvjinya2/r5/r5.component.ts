import { Component, OnInit } from '@angular/core';

export interface Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-heroes',
  templateUrl: './r5.component.html',
})
export class HeroesComponent5 implements OnInit {
  hero: Hero = {
    id: 5,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}