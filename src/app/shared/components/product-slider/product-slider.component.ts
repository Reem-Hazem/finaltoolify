import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent {
  @Input('productsList') productsList!: any[]
  customOptions: OwlOptions = {
    items:1,
    autoplay:false,
    autoplayTimeout:2000,
    loop:true,
    dots:false,
    navText: [ '<img src="../../../../assets/icons/left-arrow.svg" alt="">', '<img src="../../../../assets/icons/right-arrow.svg" alt="">' ],
    margin:10,
    nav:true,
    // rtl:true,
    responsive:{
      1300:{
        items:4
      },
      1120:{
        items:3.7
      },
      1000:{
          items:3.3
      },
      930:{
        items:3
      },
      900:{
        items:2.9
      },
      830:{
        items:2.7
      },
      770:{
        items:2.5
      },
      710:{
        items:2.3
      },
      620:{
        items :2
      },
      465:{
        items:1.5
      },
      300:{
        items:1
      }
    }
  }
}
