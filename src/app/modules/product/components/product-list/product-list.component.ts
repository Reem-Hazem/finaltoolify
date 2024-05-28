import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  cities: any[] = [
    { name: 'Cairo', code: 'NY' },
    { name: 'Mansoura', code: 'RM' },
    { name: 'MOnofia', code: 'LDN' },
    { name: 'Tanta', code: 'IST' },
    { name: 'Kafr elshiekh', code: 'PRS' }
  ];

  minPrice: number = 50;
  maxPrice: number = 800;
  selectedPrice: number = 650;
  selectedPricePosition: number = 0;
  localeDir : string = "";
  selectedCity!: string;
  products: any[] = [
    {name:"Medical Tool", used_time:"30 day", price: 123, id: 1},
    {name:" Medical Tool", used_time:"30 day", price: 123, id: 2},
    {name:"Medical Tool", used_time:"30 day", price: 123, id: 3},
    {name:"Medical Tool", used_time:"30 day", price: 123, id: 4},
    {name:"Medical Tool", used_time:"30 day", price: 123, id: 4},
    {name:"Medical Tool", used_time:"30 day", price: 123, id: 4},
    {name:"Medical Tool", used_time:"30 day", price: 123, id: 4},
    {name:"Medical Tool", used_time:"30 day", price: 123, id: 5}
  ];

  ngOnInit(): void {
    this.calculateSelectedPricePosition();
  }

  onPriceChange(event: Event) {
    this.selectedPrice = (event.target as HTMLInputElement).valueAsNumber;
    this.calculateSelectedPricePosition();
    // console.log("this.selectedPrice",this.selectedPrice)
  }
  calculateSelectedPricePosition() {
      this.selectedPricePosition =
        ((this.selectedPrice - this.minPrice) /
          (this.maxPrice - this.minPrice)) *
        100;
    // console.log('this.selectedPricePosition', this.selectedPricePosition);
  }
}
