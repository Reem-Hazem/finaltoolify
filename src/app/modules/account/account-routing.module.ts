import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AccountComponent } from './account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MyProductComponent } from './components/my-product/my-product.component';

const routes: Routes = [
  {path:'' , redirectTo:'profile' ,pathMatch:'full'},
  {path:'' , component:AccountComponent,
    children: [
      {path:'favorites' , component:FavoritesComponent},
      {path:'orders' , component:OrdersComponent},
      {path:'my-product' , component:MyProductComponent},
      {path:'my-product/sell' , component:MyProductComponent},
      {path:'profile' , component:ProfileComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
