import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent {
  hasProductsGroupSegment: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    const currentUrl = this.router.url;
    if (currentUrl.includes('products-group')) {
      this.hasProductsGroupSegment = true;
    } else {
      this.hasProductsGroupSegment = false;
    }
  }
  @Input() productInfo!: any;
  owlCarouselOptions: any = {
    items: 1,
    dots: false,
    rtl: true,
  };

  thumbnailCarouselOptions: any = {
    items: 4,
  };
  starsArray: number[] = [1, 2, 3, 4, 5];
  showNotification: boolean = false;
  notificationType: string = '';
  isProductAddedToFavorite: boolean = false;
  toggleMore() {
    // this.showMore = !this.showMore;
  }

  increaseQuantity() {
    this.productInfo.quantity++;
  }

  decreaseQuantity() {
    if (this.productInfo.quantity > 1) {
      this.productInfo.quantity--;
    }
  }

  onQuantityInput(event: any) {
    const inputValue = event.target.value;
    const numericInput = inputValue.replace(/[^0-9]/g, '');
    event.target.value = numericInput;
  }
  openAddToCartPopup() {
  }

  addToFavorite() {
  }
}
