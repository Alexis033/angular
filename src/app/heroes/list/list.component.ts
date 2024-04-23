import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Black Widow'];
  deleteHeroName: string[] = [];
  deleteLastHero(): void {
    const deletedHero: string = this.heroNames.pop() || '';
    this.deleteHeroName.push(deletedHero);
  }
}
