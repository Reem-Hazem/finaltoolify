import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';

@Component({
  selector: 'app-panner',
  templateUrl: './panner.component.html',
  styleUrls: ['./panner.component.scss']
})
export class PannerComponent {
  main_categories: any[] = [
    {
      img_src:'../../../../assets/images/dental-tools-equipment.jpg',
      name:"Main category",
      id:1
    },
    {
      img_src:'../../../../assets/images/high-angle-measuring-tools-desk.jpg',
      name:"Main category 2",
      id:2
    }
    
    // '../../../../assets/images/high-angle-measuring-tools-still-life.jpg',
    // '../../../../assets/images/art.jpg',
    // '../../../../assets/images/art2.jpg',
    // '../../../../assets/images/art3.jpg',
    // '../../../../assets/images/top-view-various-medical-equipment.jpg',
    // '../../../../assets/images/top-view-measuring-tools-still-life.jpg',
  ]
  customOptions: OwlOptions = {
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    loop:true,
    dots:true,
    margin:0,
  }
}
