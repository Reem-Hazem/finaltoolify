import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductCategoryComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    DropdownModule,
    RouterModule
  ]
})
export class ProductModule { }
