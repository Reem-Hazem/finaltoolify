import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  products: any[] = [
    {name:"asd1 asdsad assad", used_time:"30 day", price: 123, id: 1},
    {name:"asd2", used_time:"30 day", price: 123, id: 2},
    {name:"asd3", used_time:"30 day", price: 123, id: 3},
    {name:"asd4", used_time:"30 day", price: 123, id: 4},
    {name:"asd5", used_time:"30 day", price: 123, id: 5}
  ];
}
