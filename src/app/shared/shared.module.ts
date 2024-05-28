import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PannerComponent } from './components/panner/panner.component';


@NgModule({
  declarations: [
    FormErrorsComponent,
    NavBarComponent,
    ProductCardComponent,
    ProductSliderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ProductInformationComponent,
    PannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    DialogModule,
    DropdownModule
  ],
  exports: [
    FormErrorsComponent,
    NavBarComponent,
    ProductSliderComponent,
    ProductCardComponent,
    FooterComponent,
    ProductInformationComponent,
    PannerComponent
  ]
})
export class SharedModule { }
