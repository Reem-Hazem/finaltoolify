import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  @Input() short!: boolean
  // search: string = ""
  searching: boolean = false
  userName: string = "Ahmed"
  isAuth: boolean = true
  login_flag: boolean = false
  signUp: boolean = false
  mainCate: any[] = [
    {
      name:"Medicine",
      subCate:["Sub-categories","Sub-categories","Sub-categories","Sub-categories","Sub-categories"]
    },
    {
      name:"Engineering",
      subCate:["sadsad","sadsad","sadsad","sadsad","sadsad"]
    },
    {
      name:"Fine Arts",
      subCate:["sadsad","sadsad","sadsad","sadsad","sadsad"]
    },
    {
      name:"Computer Science",
      subCate:["sadsad","sadsad","sadsad","sadsad","sadsad"]
    },
  
  ]
  navbarBg : { 'background-color': string } = { 'background-color': '#fff' };
  loginForm!: FormGroup
  registerForm!: FormGroup
  ngOnInit(): void {
    if(this.router.url.includes('account') || this.router.url.includes('checkout')){
      this.short = true
    }
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if(event.url.includes('account') || this.router.url.includes('checkout')){
        this.short = true
      }
      else{
        this.short = false
      }
    });
  }
  locations: any[] = [{name:"cairo"},{name:"Alex"}]
  loadingSubmit: boolean = false
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private validation: ValidationService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required,Validators.pattern(this.validation.emailPattern)]),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          // accept two arguments pattern style and error message
          this.validation.patternValidator(
            this.validation.passwordCapitalLetterPatter,
            { notHasCapitalCase: true }
          ),
          this.validation.patternValidator(
            this.validation.passwordSmallLetterPatter,
            { notHasSmallCase: true }
          ),
          this.validation.patternValidator(
            this.validation.passwordNumbersPattern,
            { notHasNumber: true }
          ),
          this.validation.patternValidator(
            this.validation.passwordSpecialCharPattern,
            { notHasSpecialCharacters: true }
          ),
        ])
      ),
    });
    this.registerForm = new FormGroup({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email,Validators.required,Validators.pattern(this.validation.emailPattern)]),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          // accept two arguments pattern style and error message
          this.validation.patternValidator(
            this.validation.passwordCapitalLetterPatter,
            { notHasCapitalCase: true }
          ),
          this.validation.patternValidator(
            this.validation.passwordSmallLetterPatter,
            { notHasSmallCase: true }
          ),
          this.validation.patternValidator(
            this.validation.passwordNumbersPattern,
            { notHasNumber: true }
          ),
          this.validation.patternValidator(
            this.validation.passwordSpecialCharPattern,
            { notHasSpecialCharacters: true }
          ),
        ])
      ),
      phone: new FormControl('',[Validators.required,Validators.pattern(this.validation.numerical)]),
      nationalId: new FormControl('',[Validators.required, Validators.max(14), Validators.min(14),Validators.pattern(this.validation.numerical)]),
      location: new FormControl('',[Validators.required]),
    });
  }

  showProfileMenu() {
    this.document.querySelector('.profile-popup')?.classList.add('show');
    this.document.documentElement.style.overflow = "hidden";
  }
  closeProfileMenu() {
    this.document.querySelector('.profile-popup')?.classList.remove('show');
    this.document.documentElement.style.overflow = "auto";
  }
  logout(){
    this.isAuth = false;
  }
  showSearch: boolean = false;
  searchQuery: string = '';

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = ''; // Clear search query when hiding the input field
    }
}
search() {
  this.showSearch = false
  // Implement your search logic here
  console.log('Searching for:', this.searchQuery);
  // You can perform further actions like filtering data, making API calls, etc.
}
}
