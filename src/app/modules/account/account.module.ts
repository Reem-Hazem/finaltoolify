import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MyProductComponent } from './components/my-product/my-product.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AccountComponent } from './account.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    ProfileComponent,
    OrdersComponent,
    MyProductComponent,
    FavoritesComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    DialogModule,
    DropdownModule,
  ]
})
export class AccountModule { }
