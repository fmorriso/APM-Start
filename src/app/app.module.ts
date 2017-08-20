import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// The following import and corresponding declaration
// are missing from Deborah Kurata's August 2017 edition of APM-Start
// Nothing bad happens until you start the application using:
// ng serve --open --verbose --vendor-chunk --extract-css --prod
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
