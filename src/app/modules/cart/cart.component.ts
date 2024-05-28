import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { InstructionModalComponent } from 'src/app/instruction-modal/instruction-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {
  cart: boolean = false; 
  products: any[] = [
    {name:"asd1 asdsad assad", used_time:"30 day", price: 123, id: 1},
    {name:"asd2", used_time:"30 day", price: 123, id: 2},
    {name:"asd3", used_time:"30 day", price: 123, id: 3},
    {name:"asd4", used_time:"30 day", price: 123, id: 4},
    {name:"asd5", used_time:"30 day", price: 123, id: 5}
  ];
  
  showAddedToWishlist:boolean = false ;
  showRemovedFroWishlist:boolean = false ;

  wishlistedItem : boolean = false ;

  productsInCart : any[] = [
    {id : 1 , 
      name : 'Eye Blend Makeup Sponge, Purple' 
      , price : '8.99' , imgPath:"./assets/images/product.png" , 
      category : 'Accessories Brushes and sponges'  ,
       wishlist:false , arriveIn : 'days' , quantity : 1 },
    {id : 2 , 
      name : 'Bourjois Rouge Edition Velvet Liquid Lipstick' ,
       price : '8.99' , imgPath:"./assets/images/product.png" , 
       category : 'accessoriesBrushesSponges'  ,
        wishlist:false , arriveIn : 'days' , quantity : 1 }
  ]

  constructor(private router : Router){}

  ngOnInit(): void {
    if(this.router.url.includes('cart')){
      this.cart = true
    }
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if(this.router.url.includes('checkout')){
        this.cart = false
      }
      else{
        this.cart = true
      }
    });
  }

  wishlistItem(id:number){
    this.productsInCart[id].wishlist = true ;
  }
  unWishlistItem(id:number){
    this.productsInCart[id].wishlist = false ;
  }

  quantity : number = 1 ;
  decreaseQty() {
    this.quantity = this.quantity + 1 ;
  }
  increaseQty() {
    this.quantity = this.quantity - 1 ;
  }
  goToGiftPage(){
    this.router.navigate(['/gift-card']);
  }

  isModalVisible = false;

  showModal() {
    this.isModalVisible = true;
  }

  onAgree() {
    this.isModalVisible = false;
  }
}
