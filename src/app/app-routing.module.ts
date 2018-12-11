import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared-module/page-not-found/page-not-found.component';
import {JumpPageComponent} from './shared-module/jump-page/jump-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'jump'},
  {path: 'jump', component: JumpPageComponent, data: {url: 'https://littleostar-blog.github.io'}},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
