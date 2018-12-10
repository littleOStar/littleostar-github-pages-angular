import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit, OnDestroy {

  // @ViewChild('frameElement')
  // frameElement: ElementRef<HTMLIFrameElement>;
  load_url: string;

  constructor() {
    this.load_url = 'https://littleostar-blog.github.io/';
  }

  ngOnInit() {
    // this.frameElement.nativeElement.src = this.load_url;
  }

  ngOnDestroy(): void {
    this.load_url = null;
  }

}
