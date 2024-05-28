import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, tap, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationType: any = {}
  filterParams: any = {}
  queryParams: any
  currentPage: number = 1
  rowNumber: number = 10
  totalItems: number = 10
  flag: boolean = false
  notificationData = new BehaviorSubject<any>({})
  isLoading = new BehaviorSubject<boolean>(false)
  isLoadingStatus = new BehaviorSubject<boolean>(false)
  serverErrorFetch: string|null = null
  startEdit = new BehaviorSubject<any>(null)
  subscriptionList!: Subscription;
  
  options = [
    { label: 'Show 10', value: '10' },
    { label: 'Show 15', value: '15' },
    { label: 'Show 20', value: '20' },
  ];
  constructor(
    private http: HttpClient,
    private _api:HttpService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private notificationService: NotificationsService,
    ) { }
  edit(data:any){
    this.startEdit.next(data)
  }
  getNotification(params:any): Observable<any>{
    return this._api.getReq('/Store/Notification/getNotifications',{params})
  }
  getAllNotification(notification_type_id :any){
    this.subscriptionList = this.queryParams = this.activatedRoute.queryParams.pipe(
      tap((res)=>{this.isLoading.next(true)}),
      switchMap((params)=>{
        this.filterParams['notification_type_id'] = notification_type_id
        this.currentPage = +params['page'] || 1;
        this.filterParams['page']=this.currentPage
        this.rowNumber = params['itemsPerPage'] || 10;
        this.filterParams['itemsPerPage'] = this.rowNumber;
        this.filterParams['paginate'] = 1;
        return this.getNotification(this.filterParams)
      })
    ).subscribe(
      (res)=>{  
        this.successCallBackForGetTeams(res,notification_type_id) 
      },
      (err)=>{
        this.errorCallBackForGetTeams(err)
      }
      )
  }

  successCallBackForGetTeams(res: any,notification_type_id:any){
    this.notificationData.next(res?.Data ? res?.Data : {})
    this.serverErrorFetch = null;
    this.isLoading.next(false)
    this.notificationType = notification_type_id
    this.currentPage = parseInt(res?.Data.currentPage)
    this.rowNumber = parseInt(res?.Data.itemsPerPage)
    this.totalItems = parseInt(res?.Data.totalItems)
  }
  errorCallBackForGetTeams(err: any){
    if(err?.error?.Errors){
      this.serverErrorFetch = err?.Errors[0]?.errorMsg||'Something wrong happened, please try again later';
    }else{
      this.serverErrorFetch = 'Something wrong happened, please try again later'
    }
    this.notificationData.next(err?.Data ? err?.Data : [])
    this.isLoading.next(false)
  }
  changePageSize(e:any){
    const pageSize = e?.value;
    this.router.navigate([],{queryParams:{'itemsPerPage':pageSize,page:1},queryParamsHandling:'merge'});
  }
  paginate(e: any) {
    this.currentPage = e;
    this.router.navigate([], {
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
  }
  onChangeActivation(id: any,state: any){
    let payload = {
      notification_details_id:id,
      is_active:state==1?0:1
    }
    this.flag = false
    this.isLoadingStatus.next(true)
    this._api.putReq('/Store/Notification/toggleNotificationMethod',payload).subscribe(
      (res)=>{
        this.notificationService.success('',res?.Message)
        this.flag = true
        this.isLoadingStatus.next(false)
      },  
      (err)=>{
        this.flag = false
        this.isLoadingStatus.next(false)
        if(err?.error?.Error){
          this.notificationService.error('',err?.error.Error[0]);
        }
        else{
          this.notificationService.error('',err?.error?.Message);
        }
      }
      )
  }
}
