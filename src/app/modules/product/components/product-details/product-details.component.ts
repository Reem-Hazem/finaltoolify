import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productInfoData: any = {
    productThumbnailsImages: [
      { url: './assets/images/product.png' },
      { url: './assets/images/product2.jpeg' },
      { url: './assets/images/product.png' },
      { url: './assets/images/product.png' },
    ],
    title: "Medical Tools",
    productRating: [1, 2, 3, 4, 5],
    productPriceAfterDiscount: 8.99,
    productPriceBeforeDiscount: 66.89,
    productDes:
    "EyeBlendSpongeSpecificallyDesignedHelpDescription: EyeBlend sponge is specifically designed to help you blend yourfavorite foundation, concealer, or any creamy makeup. It can be usedfor the entire face and body.",
    info: "accessoriesBrushesSponges:Accessories Brushes and Sponges",
    quantity: 1,
    tags: [
      "sponge:Sponge",
      "eyeBlend:EyeBlend",
      "accessoriesBrushesSponges:Accessories Brushes and Sponges",
      "perfectCoverageFoundation:Perfect Coverage for Foundation",
    ],
  };
  products: any[] = [
    {name:"asd1 asdsad assad", used_time:"30 day", price: 123, id: 1},
    {name:"asd2", used_time:"30 day", price: 123, id: 2},
    {name:"asd3", used_time:"30 day", price: 123, id: 3},
    {name:"asd4", used_time:"30 day", price: 123, id: 4},
    {name:"asd5", used_time:"30 day", price: 123, id: 5}
  ];
}
