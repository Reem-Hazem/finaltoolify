import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'',redirectTo:'category/:id',pathMatch:'full'},
  {
    path: ':id',
    component: ProductDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'category/:id',
    component: ProductCategoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'list/:id',
    component: ProductListComponent,
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ProductListComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
