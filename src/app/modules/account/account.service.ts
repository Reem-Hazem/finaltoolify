import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  lastOrdersTab : string = '' ;
  isAccountPage :any ;
  isHelpPage:any;
  constructor() { }
}
