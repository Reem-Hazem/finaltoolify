import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mainCates: any[] = ['Medicine', 'Engineering', 'Fine Arts', 'Computer Science']
  subCates: any[] = ['SubCate1', 'SubCate2', 'SubCate3', 'SubCate4']
  products: any[] = [
    {name:"Medicine Tool", used_time:"30 day", price: 123, id: 1},
    {name:"Dentistry Tool", used_time:"30 day", price: 123, id: 2},
    {name:"Fine Arts Tool", used_time:"30 day", price: 123, id: 3},
    {name:"Brushes", used_time:"30 day", price: 123, id: 4},
    {name:"Processor", used_time:"30 day", price: 123, id: 5}
  ];
}
