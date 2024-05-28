import { ProductModule } from './../product/product.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      loadChildren: () =>
      import('../home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'product',
      loadChildren: () =>
      import('../product/product.module').then((m) => m.ProductModule),
    },
    {
      path: 'account',
      loadChildren: () =>
      import('../account/account.module').then((m) => m.AccountModule),
    },
    {
      path: 'cart',
      loadChildren: () =>
      import('../cart/cart.module').then((m) => m.CartModule),
    },
    {
      path: 'checkout',
      loadChildren: () =>
      import('../cart/cart.module').then((m) => m.CartModule),
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
