import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './shared-module/page-not-found/page-not-found.component';
import {JumpPageComponent} from './shared-module/jump-page/jump-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    // MainNavComponent,
    // MainBodyComponent,
    // MainFooterComponent,
    // SafePagePipe,

    PageNotFoundComponent,
    JumpPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
