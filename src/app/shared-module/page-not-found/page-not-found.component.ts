import {Component, OnDestroy, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    timer(0).subscribe(() => this.router.navigateByUrl(''));
  }

  ngOnDestroy(): void {
    this.router = null;
  }

}
