import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.scss']
})
export class MyProductComponent implements OnInit {
  sell_popup: boolean = false
  closePopup(){
    this.sell_popup = false
    this.router.navigate(['/account/my-product']);
  }
  ordersList:any[] = [{type:'pending_order'},{type:'discard_order'}]
  imageForm!: FormGroup;
  selectedFiles: File[] = [];
  main_category: any[] = [];
  sub_category: any[] = [];
  loadingSubmit: boolean = false

  constructor(private formBuilder: FormBuilder,private router: Router){}

  ngOnInit(): void {
    console.log(this.router.url)
    if(this.router.url.includes('sell')){
      this.sell_popup = true
    }
    this.imageForm = this.formBuilder.group({
      files: []
    });
  }
  isLoadingImage: boolean = false;
  photoAllowedExt: any =  ['.png', '.jpg','.jpeg'];
  fileSize: any = 2097152; // convert 2MB to bytes ( 1,048,576 Bytes *2 )
  formDataPayLoad: any = new FormData();
  isUploaded:boolean=false;
  srcImg: string[] = [];
  imgNumber: number = 0;
  files: File[] = [];
  uploadImage(event:any){
    const file=event.target.files[0];
    //check if file exist
    if(file){
      //if valid image load in design
      this.isUploaded=true;
      const reader = new FileReader();
      this.files.push(file);
      reader.readAsDataURL(file);
      reader.onload=(e:any)=>{
        this.srcImg.push(e.target.result);
        console.log(this.srcImg);
        this.imgNumber++;
      }
    }
  }
  deleteImage(index: number){
    let newFile = []
    let newSrcImg = []
    for(let i=0;i<this.imgNumber;i++){
      if(i==index){continue;}
      newFile.push(this.files[i]);
      newSrcImg.push(this.srcImg[i]);
    }
    this.files = newFile;
    this.srcImg = newSrcImg;
    this.imgNumber--;
  }
}
