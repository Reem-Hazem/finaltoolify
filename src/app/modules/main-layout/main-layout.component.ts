import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  showFooter: boolean = true
  constructor(private router:Router){

  }

  ngOnInit(): void {
    if(this.router.url.includes('checkout')){
      this.showFooter = false
    }
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if(this.router.url.includes('checkout')){
        this.showFooter = false
      }
      else{
        this.showFooter = true
      }
    });
  }
  showScrollButton: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the scroll button when the user scrolls down
    this.showScrollButton = (window.scrollY > 100); // Change 100 to whatever scroll position you prefer
  }

  scrollToTop() {
    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
