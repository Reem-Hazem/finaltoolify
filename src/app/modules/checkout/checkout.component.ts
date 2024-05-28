import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  schemaLoading:any[] = ['',''];
  activeAddressId:any=0; // first index/id of addresses list
  activePaymentMethodId:any='mada'; // first index/id of payment methods list
  isAddNewPaymentMethod:boolean = false;
  smallProductDescriptionTran = 'Makeup sponge from iblind, purple';

  constructor(){

  }

  ngOnInit(): void {

  }

  onChangeAddress(id:number){
    this.activeAddressId = id;
  }
  onChangePayMethod(method:any){
    this.activePaymentMethodId = method;
  }
  closeFormFire(e:any){
    this.isAddNewPaymentMethod = false;
  }
}
