import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jump-page',
  templateUrl: './jump-page.component.html',
  styleUrls: ['./jump-page.component.css']
})
export class JumpPageComponent implements OnInit {

  constructor() {
    const url = 'https://littleostar-blog.github.io';
    window.open(url, '_self');
  }

  ngOnInit() {
  }

}
