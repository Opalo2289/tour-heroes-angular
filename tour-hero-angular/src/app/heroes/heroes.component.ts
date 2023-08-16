import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = []
  selectedHero?: Hero;


  constructor(private _heroService: HeroService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes()
  }



  getHeroes(): void {
    this._heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);//como se lee esto
  }
}
