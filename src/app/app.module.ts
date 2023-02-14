import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApplicantProcessModule} from "./applicant-process/applicant-process.module";


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ApplicantProcessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
