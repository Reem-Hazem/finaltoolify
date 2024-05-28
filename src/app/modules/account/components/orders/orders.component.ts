import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  productsList:any[] = [{name:'Medicine Tool'},{name:' Dentinal Tool'}]
  constructor(private router:Router,private route:ActivatedRoute){

  }
  goToCancelPage(productId: any){
    this.router.navigate([`${productId}/return`],{relativeTo : this.route})
  }
}
