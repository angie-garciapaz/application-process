import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicantProcessComponent} from "./applicant-process/applicant-process.component";
import {ReviewComponent} from "./applicant-process/review/review.component";
import {SelectOfferComponent} from "./applicant-process/select-offer/select-offer.component";
import {FinalAndPayComponent} from "./applicant-process/final-and-pay/final-and-pay.component";
import {SignLoanComponent} from "./applicant-process/sign-loan/sign-loan.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {ApplicationProcessComponent} from "./applicant-process/application-process/application-process.component";

const routes: Routes = [
  {path: '', redirectTo: '/process', pathMatch: 'full'},
  {path: 'process', component: ApplicantProcessComponent},
  {path: 'application-process', component: ApplicationProcessComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'offer', component: SelectOfferComponent},
  {path: 'final-and-pay', component: FinalAndPayComponent},
  {path: 'sign', component: SignLoanComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule]
})
export class AppRoutingModule {
}
