import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BeanNav} from '../../models/bean-nav';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnDestroy {

  home_title: string;
  home_image: string;
  data_array: BeanNav[];

  @ViewChild('nav')
  nav: ElementRef<HTMLDivElement>;

  constructor() {
    this.home_title = 'Home';
    this.home_image = '/assets/home/favicon_home_img.ico';
    this.data_array = [new BeanNav('blog', 'https://littleostar-blog.github.io/')];
  }

  ngOnInit() {
    this.nav.nativeElement.style.display = 'invisible';
  }

  ngOnDestroy(): void {
    this.data_array = null;
  }

}
