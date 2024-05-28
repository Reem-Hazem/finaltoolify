import { Component } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent {
  subCates: any[] = ['Medicine', 'Pharmacy', 'Dentistry', 'SubCate4']
  products: any[] = [
    {name:"Medicine Tool", used_time:"30 day", price: 123, id: 1},
    {name:"Dental Tool", used_time:"30 day", price: 123, id: 2},
    {name:"Fine Arts", used_time:"30 day", price: 123, id: 3},
    {name:"Brushes", used_time:"30 day", price: 123, id: 4},
    {name:"Processor", used_time:"30 day", price: 123, id: 5}
  ];
}
