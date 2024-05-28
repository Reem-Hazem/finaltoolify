import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AccountService } from 'src/app/modules/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit , OnDestroy {

  currentTab : string = '';
  orderTran:any = "Orders";
  favTran:any = "Favorites";
  myProductTarn:any = "My Product";
  accountTran:any = "Profile";

  constructor(private accountService : AccountService , private router:Router , private route : ActivatedRoute){}
  private navigationSubscription !: Subscription;

  ngOnInit(){
    this.navigationSubscription = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event:NavigationEnd)=>{
          let current = event?.url.split("/")[2];
          this.getCurrentTabFromRouter(current);
      })
    this.accountService.isAccountPage = true ;
    this.getCurrentTabFromRouter();
  }


  getCurrentTabFromRouter(activeTab? : any){
    let tab : any ;
    if(!activeTab){
      tab = this.router.url.split("/")[2].replaceAll('-' , ' ') ;
    }else{
      tab = activeTab.replaceAll('-' , ' ') ;
    }
    console.log(tab)
    this.currentTab = tab.charAt(0).toUpperCase() + tab.slice(1) ;
  }

  goToTab(tab:string){
    this.currentTab = tab ;
  }
  ngOnDestroy(): void {
    this.accountService.lastOrdersTab = '' ;
    this.accountService.isAccountPage = false ;
    this.navigationSubscription.unsubscribe();
  }

}
