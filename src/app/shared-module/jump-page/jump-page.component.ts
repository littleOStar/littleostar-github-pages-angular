import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-jump-page',
  templateUrl: './jump-page.component.html',
  styleUrls: ['./jump-page.component.css']
})
export class JumpPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data) => window.open(data['url'], '_self')
    );
  }

}
